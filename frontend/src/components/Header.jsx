import React from 'react';

const Header = () => {
  return (
    <div className='flex sm:items-center justify-between py-3 border-b-2 border-gray-200 font-sans'>
      <div className='relative flex items-center space-x-4'>
        <div className='flex flex-col leading-tight'>
          <div className='text-2xl mt-1 flex items-center'>
            <span className='text-gray-700 mr-3 ml-1 md:ml-0'>
              Introduction
            </span>
          </div>
          <span className='text-lg text-gray-600 ml-1 md:ml-0'>
            <span className='hidden md:inline'>This Channel Is For </span>
            Company Wide Chatter
          </span>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <div
          type='button'
          className='inline-flex items-center justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-gray-500'
        >
          4 | 4
        </div>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-gray-500 '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 640 512'
            stroke='currentColor'
            className='h-6 w-6 text-black font-bolder'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
