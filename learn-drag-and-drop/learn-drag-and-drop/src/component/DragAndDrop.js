import React, { useRef, useState } from 'react';
// ref https://www.codingnepalweb.com/drag-drop-file-upload-feature-javascript/

function isImageType(file) {
  const fileType = file.type;
  const validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];
  return validExtensions.includes(fileType);
}

function DragAndDrop() {
  const [fileURL, setFileURL] = useState('');
  const [isDropAraeActive, setIsDropAraeActive] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const input = useRef();

  const handleDragOver = () => {
    setIsDropAraeActive(true);
    setIsOver(true);
  };

  const handleDragLeave = () => {
    setIsDropAraeActive(false);
    setIsOver(false);
  };

  const handleDropFile = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files[0]);
    if (isImageType(e.dataTransfer.files[0])) {
      saveAndShowFile(e.dataTransfer.files[0]);
    } else {
      alert('This is not an Image File!');
      setIsOver(false);
      setIsDropAraeActive(false);
    }
  };

  const handleClickBrowseFile = (e) => {
    input.current.click();
  };

  const handleChangeInput = (e) => {
    setIsDropAraeActive(true);
    if (isImageType(e.target.files[0])) {
      saveAndShowFile(e.target.files[0]);
      setIsDropAraeActive(true);
    } else {
      alert('This is not an Image File!');
      setIsOver(false);
      setIsDropAraeActive(false);
    }
  };

  const handleClickDeleteImg = () => {
    setFileURL('');
    setIsOver(false);
    setIsDropAraeActive(false);
  };

  function saveAndShowFile(file) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      setFileURL(fileURL);
    };
    fileReader.readAsDataURL(file);
  }

  const [isimgPreviewActive, setIsimgPreviewActive] = useState(false);
  const handleClickShowImg = () => {
    setIsimgPreviewActive(true);
  };

  const handleClickClose = () => {
    setIsimgPreviewActive(false);
  };

  return (
    <>
      {/* <img
        id='myImg'
        onClick={handleClickShowImg}
        src='http://picsum.photos/100'
        alt='show'
        style={{ width: '100%', maxWidth: '300px' }}
      /> */}

      {/* <!-- The Modal --> */}
      {/* <div id='myModal' className='modal' style={{ display: isimgPreviewActive ? 'block' : 'none' }}>
        <span className='close' onClick={handleClickClose}>
          &times;
        </span>
        <img
          style={{ width: '100%', maxWidth: '300px' }}
          className='modal-content'
          id='img01'
          alt='show'
          src='http://picsum.photos/100'
        />
      </div> */}

      <div
        className={`drag-area${isDropAraeActive ? ' active' : ''}`}
        onDrop={handleDropFile}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {fileURL ? (
          <>
            <img id='myImg' onClick={handleClickShowImg} src={fileURL} alt='imageFileUpload' />
            <div id='myModal' className='modal' style={{ display: isimgPreviewActive ? 'block' : 'none' }}>
              <span className='close' onClick={handleClickClose}>
                &times;
              </span>
              <img style={{ width: '100%' }} className='modal-content' id='img01' src={fileURL} alt='imageFileUpload' />
            </div>
          </>
        ) : (
          <>
            <div className='icon'>
              <i className='fas fa-cloud-upload-alt'></i>
            </div>
            <header>{isOver ? 'Release to Upload File' : 'Drag & Drop to Upload File'}</header>
            <span>OR</span>
            <button onClick={handleClickBrowseFile}>Browse File</button>
            <input type='file' hidden ref={input} onChange={handleChangeInput} />
          </>
        )}
      </div>
      <button onClick={handleClickDeleteImg}>delete</button>
    </>
  );
}

export default DragAndDrop;
