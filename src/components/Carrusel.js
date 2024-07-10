import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Carrusel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-next" onClick={onClick}>
      &gt;
    </button>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      &lt;
    </button>
  );
};

const Carrusel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajusta este valor según sea necesario
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 769, // Asegúrate de que coincida con tu media query
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1600, // Duración de la animación en milisegundos
    });
  }, []);

  return (
    <div className='carrusel-principal-contenedor'>
      <div className="carousel-container" data-aos="fade-up">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={img1} alt="Argentino" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img2} alt="Azul" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img3} alt="Gato" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img4} alt="Felinos" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img5} alt="Guacamayo" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img6} alt="León" className="carousel-imagen" />
          </div>
          <div className="carousel-item">
            <img src={img7} alt="Tigre" className="carousel-imagen" />
          </div>
          <div className='carousel-item'>
            <img src={img8} alt="Zorro" className="carousel-imagen" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carrusel;
