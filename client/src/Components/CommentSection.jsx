import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Comment from './Comment';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) return;
    try {
      const res = await fetch('/api/comment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: comment, postId, userId: currentUser._id }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment('');
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) return navigate('/sign-in');
      const res = await fetch(`/api/comment/likeComment/${commentId}`, { method: 'PUT' });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.map((c) =>
          c._id === commentId ? { ...c, likes: data.likes, numberOfLikes: data.likes.length } : c
        ));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (comment, editedContent) => {
    setComments(comments.map((c) =>
      c._id === comment._id ? { ...c, content: editedContent } : c
    ));
  };

  const handleDelete = async (commentId) => {
    setShowModel(false);
    try {
      if (!currentUser) return navigate('/sign-in');
      const res = await fetch(`/api/comment/deleteComment/${commentId}`, { method: 'DELETE' });
      if (res.ok) {
        setComments(comments.filter((c) => c._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-2xl mx-auto w-full p-3'>
      {currentUser ? (
        <div className='flex items-center gap-1 my-5 text-gray-500 text-sm'>
          <p>Signed in as:</p>
          <img src={currentUser.profilePicture} alt='' className='h-5 w-5 object-cover rounded-full' />
          <Link to='/dashboard?tab=profile' className='text-xs text-cyan-600 hover:underline'>
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className='text-sm text-teal-500 my-5 flex gap-1'>
          You must be signed in to comment.
          <Link to='/sign-in' className='text-blue-500 hover:underline'>Sign In</Link>
        </div>
      )}

      {currentUser && (
        <form className='border border-teal-500 rounded-md p-3' onSubmit={handleSubmit}>
          <textarea
            placeholder='Add a comment...'
            rows='3'
            maxLength='200'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='w-full p-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>{200 - comment.length} characters remaining</p>
            <button
              type='submit'
              className='px-3 py-1 text-sm text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded hover:opacity-90'
            >
              Submit
            </button>
          </div>
          {commentError && (
            <div className='mt-5 p-2 text-sm text-red-800 bg-red-100 rounded' role='alert'>
              {commentError}
            </div>
          )}
        </form>
      )}

      {comments.length === 0 ? (
        <p className='text-sm my-5'>No comments yet!</p>
      ) : (
        <>
          <div className='text-sm my-5 flex items-center gap-1'>
            <p>Comments</p>
            <div className='border border-gray-400 py-1 px-2 rounded-sm'>
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((c) => (
            <Comment
              key={c._id}
              comment={c}
              onLike={handleLike}
              onEdit={handleEdit}
              onDelete={(id) => {
                setShowModel(true);
                setCommentToDelete(id);
              }}
            />
          ))}
        </>
      )}

      {showModel && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-md'>
            <div className='text-center'>
              <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
              <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
                Are you sure you want to delete this comment?
              </h3>
              <div className='flex justify-center gap-4'>
                <button
                  onClick={() => handleDelete(commentToDelete)}
                  className='px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700'
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => setShowModel(false)}
                  className='px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300'
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentSection;