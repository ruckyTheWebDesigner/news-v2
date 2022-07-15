import React from "react";
import ReadMore from "../api/ReadMore";

function CustomNews() {
  return (
    <div className='news-content mb-5 dark:bg-grey600'>
      <div>
        <a className='block overflow-hidden rounded-lg shadow-sm' href='/#'>
          <div className='p-4'>
            <h1 className='text-xl mb-3 font-bold'>Breaking News</h1>
            <img
              className='object-full w-full h-56 rounded-md'
              src='https://www.hyperui.dev/photos/team-1.jpeg'
              alt=''
            />
          </div>

          <div className='p-6'>
            <h1 className='text-2xl font-bold'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>

            <ReadMore>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt
            </ReadMore>
          </div>
        </a>
      </div>

      <div className='iframe p-3'>
        <iframe
          width='100%'
          height='100%'
          src='https://rss.app/embed/v1/list/tTpQh2O1yxC2nCXB'
          title='news'
          frameBorder='0'></iframe>
      </div>
    </div>
  );
}

export default CustomNews;
