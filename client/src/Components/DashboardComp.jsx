import React, { useEffect, useState } from "react";
import { HiAnnotation, HiArrowNarrowUp, HiDocumentText, HiOutlineUserGroup } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/getusers?limit=5`);
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comment/getcomments?limit=5");
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { title: "Total Users", count: totalUsers, lastMonth: lastMonthUsers, Icon: HiOutlineUserGroup, color: "teal-600" },
          { title: "Total Comments", count: totalComments, lastMonth: lastMonthComments, Icon: HiAnnotation, color: "indigo-600" },
          { title: "Total Posts", count: totalPosts, lastMonth: lastMonthPosts, Icon: HiDocumentText, color: "lime-600" },
        ].map(({ title, count, lastMonth, Icon, color }) => (
          <div key={title} className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
            <div className="flex justify-between">
              <div>
                <h3 className="text-gray-500 text-md uppercase">{title}</h3>
                <p className="text-2xl">{count}</p>
              </div>
              <Icon className={`bg-${color} text-white rounded-full text-5xl p-3 shadow-lg`} />
            </div>
            <div className="flex gap-2 text-sm">
              <span className="text-green-500 flex items-center">
                <HiArrowNarrowUp />
                {lastMonth}
              </span>
              <div className="text-gray-500">Last Month</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tables */}
      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        {/* Users Table */}
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent Users</h1>
            <Link to={"/dashboard?tab=users"}>
              <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
                See all
              </button>
            </Link>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">User Image</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Username</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-4 py-2">
                    <img src={user.profilePicture} alt="user" className="w-10 h-10 rounded-full bg-gray-500" />
                  </td>
                  <td className="px-4 py-2">{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent Comments</h1>
            <Link to={"/dashboard?tab=comments"}>
              <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
                See all
              </button>
            </Link>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Comment Content</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Likes</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {comments.map((comment) => (
                <tr key={comment._id}>
                  <td className="px-4 py-2 w-96">
                    <p className="line-clamp-2">{comment.content}</p>
                  </td>
                  <td className="px-4 py-2">{comment.numberOfLikes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent Posts</h1>
            <Link to={"/dashboard?tab=posts"}>
              <button className="px-3 py-1 border border-purple-500 text-purple-500 rounded hover:bg-purple-500 hover:text-white transition">
                See all
              </button>
            </Link>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Post Image</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Post Title</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="px-4 py-2">
                    <img src={post.image} alt="post" className="w-14 h-10 rounded-md bg-gray-500" />
                  </td>
                  <td className="px-4 py-2 w-96">{post.title}</td>
                  <td className="px-4 py-2 w-5">{post.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardComp;
