import React from 'react';

function Title({ text1, text2 }) {
  return (
    <div className='flex flex-col items-center mb-3'>
      <div className='inline-flex gap-2 justify-center items-center'>
        <p className='text-pink-500 font-semibold text-4xl text-center'>
          {text1} <span className='text-gray-100 font-medium'>{text2}</span>
        </p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-purple-600'></p>
      </div>
    </div>
  );
}

export default Title;
