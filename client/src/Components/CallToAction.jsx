import React from 'react';

function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more about Javascript?</h2>
        <p className='text-gray-500 my-2'>Checkout these resources with Javascript Projects</p>

        <a
          href="https://github.com/vedantmohol?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2"
        >
          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium px-5 py-2 rounded-tl-xl rounded-bl-none transition duration-300 hover:opacity-90"
          >
            Know More
          </button>
        </a>
      </div>

      <div className='p-7 flex-1'>
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto"
          alt="JavaScript"
        />
      </div>
    </div>
  );
}

export default CallToAction;