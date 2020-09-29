import React, { useState, useEffect } from "react";
import Images from "../images";
import styled from "styled-components";

const IllustrationList = () => {
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    // populate with Images from Images Array
    setImages(Images);
  }, []);

  useEffect(() => {
    let landScape = document.querySelectorAll(".li-illustration img");
    landScape.forEach(() => {
      for (var i = 0; i < Images.length; i++) {
        if (landScape[i].naturalWidth > landScape[i].naturalHeight) {
          landScape[i].className = "landscape";
        }
      }
    });
  });

  useEffect(() => {});
  console.log(openModal);

  function showImageModal(e) {
    let src = e.target.src;
    console.log(src);
    let modal = document.getElementById("img01");
    console.log(modal);
    modal.src = src;
    setOpenModal(!openModal);
  }

  return (
    <div className="illustration-gallery">
      <ul className="cropped-images pl-0">
        {images.map((image, i) => {
          return (
            <li className="li-illustration" key={i}>
              <img
                id={i}
                src={image.image}
                alt="illustrations"
                onClick={showImageModal}
              />
            </li>
          );
        })}
      </ul>
      <ImageModal
        id="modal"
        className={openModal ? "modal d-flex" : "modal d-none"}
      >
        <div className="container">
          <div className="row">
            <div className="mx-auto modal-container">
              <img
                className="modal--img"
                id="img01"
                alt="modal"
                onClick={() => setOpenModal(!openModal)}
              />
              <div className="img-modal-footer">
                <p className="mb-0 mt-0" id="caption">
                  katcha.fun
                </p>
                <span
                  className="close"
                  onClick={() => setOpenModal(!openModal)}
                >
                  &times;
                </span>
              </div>
            </div>
          </div>
        </div>
      </ImageModal>
    </div>
  );
};

export default IllustrationList;

const ImageModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Modal Content (image) */
  .modal-container {
    margin: auto;
    display: block;
    height: 800px;
  }

  .modal--img {
    height: inherit;
    max-width: 100%;
    border: 3px solid var(--light);
    border-radius: 4px;
    background-color: var(--light);
  }

  /* Caption of Modal Image */
  .img-modal-footer {
    margin: auto;
    display: flex;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: var(--light);
    padding: 10px 0;
    height: 50px;
    align-items: center;
    justify-content: space-between;
  }

  /* Add Animation */
  .modal-container,
  #caption {
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0);
    }
    to {
      -webkit-transform: scale(1);
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  /* The Close Button */
  .close {
    color: var(--light);
    font-size: 60px;
    font-weight: bold;
    transition: 0.3s;
  }

  .close:hover,
  .close:focus {
    color: var(--peach);
    text-decoration: none;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .modal--img {
      height: initial;
    }
  }
`;
