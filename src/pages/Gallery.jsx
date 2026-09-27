import React, { useState, useCallback, useRef } from 'react';
import { X, ZoomIn, ZoomOut, Maximize, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const SAMPLE_PHOTOS = [
  { id: '1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Minimalist Workspace', category: 'Architecture' },
  { id: '2', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Modern Interior', category: 'Design' },
  { id: '3', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Corporate Office', category: 'Business' },
  { id: '4', url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Clean Architecture', category: 'Spaces' },
  { id: '5', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'White Studio', category: 'Interior' },
  { id: '6', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Glass Facade', category: 'Architecture' },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const lightboxScrollRef = useRef(null);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
    setScale(1);
    
    setTimeout(() => {
      if (lightboxScrollRef.current) {
        const container = lightboxScrollRef.current;
        const element = container.children[index];
        if (element) {
          container.scrollTo({ left: element.offsetLeft, behavior: 'instant' });
        }
      }
    }, 10);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setScale(1);
  };

  const handleScroll = useCallback(() => {
    if (!lightboxScrollRef.current) return;
    const container = lightboxScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    if (width === 0) return;
    
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < SAMPLE_PHOTOS.length) {
      setActiveIndex(newIndex);
      setScale(1); 
    }
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    if (!lightboxScrollRef.current) return;
    const container = lightboxScrollRef.current;
    const element = container.children[index];
    if (element) {
      container.scrollTo({ left: element.offsetLeft, behavior: 'smooth' });
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = activeIndex === SAMPLE_PHOTOS.length - 1 ? 0 : activeIndex + 1;
    scrollToIndex(nextIndex);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = activeIndex === 0 ? SAMPLE_PHOTOS.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  };

  const handleZoomIn = (e) => {
    if (e) e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 3)); 
  };

  const handleZoomOut = (e) => {
    if (e) e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.5, 0.5)); 
  };

  const handleResetZoom = (e) => {
    if (e) e.stopPropagation();
    setScale(1);
  };

  return (
    <section className="bg-white min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[90rem] mx-auto relative">
        
        {/* Gallery Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Curated Collections
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 max-w-2xl">
            Explore our premium selection. Click any image to expand, maximize, and navigate.
          </p>
        </div>

        {/* 3-Column Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12 pt-4">
          {SAMPLE_PHOTOS.map((photo, index) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out aspect-[4/5]"
              onClick={() => openLightbox(index)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                draggable="false"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Maximize className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  {photo.category}
                </p>
                <h3 className="text-lg sm:text-xl font-medium text-white">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Fullscreen Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md">
          
          {/* Top Controls */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex items-center gap-2 sm:gap-4 z-50">
            <div className="flex bg-white/80 backdrop-blur-md rounded-full shadow-md p-1 border border-gray-200">
              <button onClick={handleZoomOut} className="p-1.5 sm:p-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-full transition-colors" title="Zoom Out">
                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button onClick={handleResetZoom} className="p-1.5 sm:p-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-full transition-colors" title="Reset Zoom">
                <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button onClick={handleZoomIn} className="p-1.5 sm:p-2 text-gray-700 hover:text-black hover:bg-gray-200 rounded-full transition-colors" title="Zoom In">
                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <button 
              onClick={closeLightbox}
              className="p-2 sm:p-3 text-gray-700 hover:text-black bg-white/80 backdrop-blur-md border border-gray-200 hover:bg-gray-200 rounded-full transition-colors shadow-md"
              title="Close"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Left Arrow (Visible on Mobile) */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-gray-700 hover:text-black bg-white/60 hover:bg-white/90 rounded-full transition-all shadow-lg z-50 backdrop-blur-md border border-gray-200"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow (Visible on Mobile) */}
          <button 
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 text-gray-700 hover:text-black bg-white/60 hover:bg-white/90 rounded-full transition-all shadow-lg z-50 backdrop-blur-md border border-gray-200"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          {/* Main Horizontal Scroll Container */}
          <div 
            ref={lightboxScrollRef}
            onScroll={handleScroll}
            className="flex-1 w-full h-full flex overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            {SAMPLE_PHOTOS.map((photo, index) => (
              <div 
                key={photo.id} 
                className="w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-2 sm:p-8 relative"
              >
                {/* Scalable Image Wrapper */}
                <div 
                  className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
                  style={{ transform: activeIndex === index ? `scale(${scale})` : 'scale(1)' }}
                >
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Caption Overlay */}
                  <div className={`absolute bottom-4 sm:bottom-8 text-center transition-opacity duration-300 bg-white/90 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 ${scale > 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{photo.title}</h3>
                    <p className="text-xs sm:text-base text-gray-600 font-medium mt-0.5 sm:mt-1">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}