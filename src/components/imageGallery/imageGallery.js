import { Gallery } from "./imageGallery.styled";
import { useState, useEffect } from "react";
import Btn from "../button/button";
import { getImg } from "../../API Service/services";
import Modal from "../modal/modal";
import { ImageItem } from "../imageGalleryItem/imageGalleryItem";
import Spin from "../loader/loader";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

export default function ImageGallery({ title }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!title) {
      return;
    }
    setImages([]);
    setPage(1);
    setLoading(true);
    getImg(title, page)
      .then((r) => r.json())
      .then(({ hits }) => setImages(hits))
      .finally(() => {
        setLoading(false);
      });
  }, [title]);

  useEffect(() => {
    if (page === 1) {
      return;
    }
    getImg(title, page)
      .then((r) => r.json())
      .then(({ hits }) => setImages([...images, ...hits]));
  }, [page]);

  const loadBtnHandler = (newPage) => {
    setPage(newPage);
  };

  const selectImage = (newImage) => {
    setSelectedImg(newImage);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const onResetImage = () => {
    setSelectedImg(null);
    toggleModal();
  };

  return (
    <>
      {loading && <Spin />}
      <Gallery>
        {images.map(({ webformatURL, tags, largeImageURL }) => (
          <ImageItem
            key={uuidv4()}
            source={webformatURL}
            name={tags}
            sourceLarge={largeImageURL}
            onSelectImg={selectImage}
          />
        ))}
      </Gallery>
      {images.length > 0 ? <Btn onClick={loadBtnHandler} /> : null}
      {showModal && (
        <Modal onCloseModal={onResetImage} selectedImage={selectedImg} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  title: PropTypes.string.isRequired,
};
