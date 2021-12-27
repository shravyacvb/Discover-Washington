import { useState } from 'react';
import './Carousel.css';

function Carousel({ slides, label }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = slides.length - 1;
  const nextIndex = activeIndex === maxIndex ? 0 : activeIndex + 1;
  const prevIndex = activeIndex === 0 ? maxIndex : activeIndex - 1;

  const goToNext = () => {
    setActiveIndex(nextIndex);
  };

  const goToPrev = () => {
    setActiveIndex(prevIndex);
  };

  const slideList = slides.map( (slide, index)  => {

    let classes = ['carousel__slide'];
    if (index === activeIndex) {
      classes.push('carousel__slide--active');
    }

    return (
      <li key={slide.src} className={ classes.join(' ') }>
        <div className="gallery-buttons">
            <button className="gallery-text" onClick={ () => 
                window.open("https://www.google.com/search?q=Washington+"+encodeURIComponent(slide.alt), "_blank")
            }>{slide.alt}</button>
            <button onClick={ () => 
                window.open("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(slide.alt), "_blank")
            } className="gallery-text">Directions</button>
        </div>
        <img src={slide.src} alt={slide.alt} className="carousel__img"/>
      </li>
    );

  });

  return (
    <div className="carousel" role="region" aria-label={label}>
        <div>
            <button className="carousel__control carousel__control--previous" onClick={goToPrev} aria-label='Previous Place'>&lt;</button>
        </div>
        <div className="carousel__content">
            <ul className="carousel__slide-container">{slideList}</ul>
        </div>
        <div>
            <button className="carousel__control carousel__control--next" onClick={goToNext} aria-label='Next Place'>&gt;</button>
        </div>
    </div>
  );
}

export default Carousel;
