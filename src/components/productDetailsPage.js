import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productDetailsPage.css';
import productsData from './Product.js';
import EnquireModal from './EnquireModel.js'; // Import the EnquireModal component

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productsData.find(product => product.id === productId);

  const [isEnquireModalOpen, setIsEnquireModalOpen] = useState(false);

  const openEnquireModal = () => {
    setIsEnquireModalOpen(true);
  };

  const closeEnquireModal = () => {
    setIsEnquireModalOpen(false);
  };

  if (!product) {
    return <div>No product details available</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="product-details">
      <div className="product-images">
        <Slider {...settings}>
          {product.imageSlider.map((image, index) => (
            <div key={index}>
              <img src={`/images/${image}`} alt={product.name} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>Brand:</td>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>${product.price}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td>{product.rating}</td>
            </tr>
            <tr>
              <td>Date:</td>
              <td>{product.date}</td>
            </tr>
          </tbody>
        </table>
        <div className="buttons">
          <button className="enquire-btn" onClick={openEnquireModal}>Enquire</button>
          <button className="locate-btn">Locate</button>
        </div>
      </div>
      {isEnquireModalOpen && <EnquireModal onClose={closeEnquireModal} />}
    </div>
  );
};

export default ProductDetailsPage;
