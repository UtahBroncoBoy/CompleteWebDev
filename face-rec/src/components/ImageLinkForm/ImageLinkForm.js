import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return(
    <div>
      <p className='f3'>
        {'This Magic App will detect faces in your pictures. Upload the URL to your photo.'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center'type="text" placeholder='Image URL'/>
          <button className='w-30 grow f4 link ph3 pv2 dib white pointer'>Detect Faces</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;