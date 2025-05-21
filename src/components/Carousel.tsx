import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ autoSlideInterval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
      title: "Le syndic autrement",
      subtitle: "Une gestion immobilière moderne et transparente",
      cta: "Découvrir",
      link: "/discover"
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
      title: "Nos packs",
      subtitle: "Des solutions adaptées à vos besoins",
      cta: "Voir les offres",
      link: "/offers"
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg",
      title: "Here we go",
      subtitle: "Commencez l'expérience dès maintenant",
      cta: "Commencer",
      link: "/start"
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlideInterval]);

  return (
    <div className="relative h-screen overflow-hidden mt-16">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <CarouselItem 
            key={slide.id}
            imageUrl={slide.imageUrl}
            title={slide.title}
            subtitle={slide.subtitle}
            cta={slide.cta}
            link={slide.link} // ✅ Added "link"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-[#101010] p-2 rounded-full shadow-lg transition-all"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-[#101010] p-2 rounded-full shadow-lg transition-all"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-[#FF5A00] w-10' : 'bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;