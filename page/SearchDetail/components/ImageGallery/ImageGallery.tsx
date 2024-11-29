'use client';
import React, { useState } from "react";
interface ImageGalleryProps {
  images: string[];
  modalImages: string[];
}
const ImageGallery = ({ images, modalImages }: ImageGalleryProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (image:any) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <div
        className="col-span-2 row-span-2 cursor-pointer"
        onClick={() => openModal(images[0])}
      >
        <img
          src={images[0]}
          alt="Main Image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {images.slice(1, 5).map((image, index) => (
        <div key={index} className="cursor-pointer" onClick={() => openModal(image)}>
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 "
          onClick={closeModal}
        >
          <div
            className="h-[90vh] bg-white rounded-lg p-4 max-w-5xl w-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Selected"
              className="w-3/4 mx-auto h-auto rounded-lg mb-4"
            />
            <div className="grid grid-cols-3 gap-4">
              {modalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Modal Image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-8 py-2 bg-secondary-09 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
