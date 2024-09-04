import React from 'react';

const HomeNew = () => {
    return (
        <div>
          <video className='w-screen h-screen' controls>
            <source src="earthss.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    );
};

export default HomeNew;
