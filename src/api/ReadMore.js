import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='text'>
      <li>{isReadMore ? text.slice(0, 150) : text}</li>

      <div
        onClick={toggleReadMore}
        class='inline-block mt-4 font-medium text-blue-600 '>
        {isReadMore ? (
          <>Read More</>
        ) : (
          <button className='pl-1'>Show Less</button>
        )}
        <span aria-hidden='true'>&rarr;</span>
      </div>
    </div>
  );
};

export default ReadMore;
