import React from 'react';

const FaceRecognition = ({ imageURL }) => {
  return(
    <div className='center'>
      <img src={imageURL} alt='Faces to Detect'/>;
    </div>
  )
  
}

export default FaceRecognition;