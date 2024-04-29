import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productDetailsPage.css';
import EnquireModal from './EnquireModel'; // Import the EnquireModal component
import productsData from './Product';

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
                <td><span className="highlight">${product.price}</span></td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>{product.rating}</td>
              </tr>
              <tr>
                <td>Date:</td>
                <td>{product.date}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{product.description}</td>
              </tr>
              <tr>
                <td>Technical Specifications:</td>
                <td>
                  <ul>
                    <li>Material: {product.technicalSpecifications.material}</li>
                    <li>Dimensions: {product.technicalSpecifications.dimensions.width} inches (Width) x {product.technicalSpecifications.dimensions.depth} inches (Depth) x {product.technicalSpecifications.dimensions.height} inches (Height)</li>
                    <li>Color: {product.technicalSpecifications.color}</li>
                    <li>Installation: {product.technicalSpecifications.installation}</li>
                    <li>Faucet Hole: {product.technicalSpecifications.faucetHole}</li>
                    <li>Drainage: {product.technicalSpecifications.drainage}</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Availability:</td>
                <td><span className="highlight">{product.availability}</span></td>
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
