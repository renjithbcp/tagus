import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productDetailsPage.css';
import productsData from './Product.js';
import EnquireModal from './EnquireModel.js'; // Import the EnquireModal component

const Breadcrumb = ({ paths }) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      {paths.map((path, index) => (
        <li key={index} className="breadcrumb-item">
          {path.link ? (
            <Link to={path.link}>{path.text}</Link>
          ) : (
            <span>{path.text}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

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

  const breadcrumbPaths = [
    { text: 'Home', link: '/' },
    { text: 'Products', link: '/products' },
    { text: product.name, link: null }
  ];

  return (
    <div>
      <Breadcrumb paths={breadcrumbPaths} />
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
    </div>
  );
};

export default ProductDetailsPage;
