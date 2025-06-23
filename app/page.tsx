"use client";
import Image from "next/image";
import React from "react";
import Link from 'next/link';

export default function Home() {
  const [modalImg, setModalImg] = React.useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-6 md:py-10 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/icontext.webp"
            alt="Bloomie Logo"
            width={340}
            height={80}
            className="mx-auto mb-2"
            priority
          />
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-pink-600 mb-2">
            They grow too fast. Capture a lovely moment.
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            A private baby journal to record memories, milestones, and love.
          </p>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Capture precious photos effortlessly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Take beautiful photos of your little one with our intuitive camera interface designed for capturing those perfect moments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tag emotions, activities, and milestones
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your memories with smart tags for emotions, activities, and important milestones in your baby&apos;s journey.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Keep everything private, or share it with family
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your baby&apos;s memories are precious. Keep them private or selectively share special moments with family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="px-4 py-16 md:py-24 lg:px-8 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Desktop/Tablet: 5 columns, Mobile: Carousel */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {[1,2,3,4,5].map((num) => (
              <button
                key={num}
                className="bg-white rounded-3xl shadow-xl flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setModalImg(`/screenshots/ss${num}.jpg`)}
                aria-label={`Show preview ${num}`}
              >
                <div className="rounded-2xl overflow-hidden w-full h-80 flex items-center justify-center bg-white">
                  <Image src={`/screenshots/ss${num}.jpg`} alt={`Preview ${num}`} width={320} height={320} className="object-contain w-full h-full" />
                </div>
              </button>
            ))}
          </div>
          {/* Mobile Carousel */}
          <MobilePreviewCarousel setModalImg={setModalImg} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-4 py-16 md:py-24 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8 italic">
            &quot;The first smile. The tiny toes. Don&apos;t miss a moment.&quot;
          </blockquote>
          <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-12 py-4 rounded-2xl font-semibold text-xl hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg">
            Start Journaling Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 Bloomie. Made with love by <Link href="https://tangerinlabs.app" target="_blank" rel="noopener noreferrer" className="underline hover:text-pink-600">Tangerin Labs.</Link>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-pink-600 transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for full image */}
      {modalImg && (
        <ImageModal src={modalImg} onClose={() => setModalImg(null)} />
      )}
    </div>
  );
}

// Modal component
function ImageModal({ src, onClose }: { src: string; onClose: () => void }) {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center max-w-3xl mx-4"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-gray-700 hover:bg-white shadow-lg z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <Image src={src} alt="Full Preview" width={1200} height={900} className="w-auto h-auto max-w-full max-h-screen rounded-2xl object-contain bg-white" />
      </div>
    </div>
  );
}

// Update MobilePreviewCarousel to accept setModalImg prop
function MobilePreviewCarousel({ setModalImg }: { setModalImg: (src: string) => void }) {
  const slides = [1,2,3,4,5].map(num => ({ src: `/screenshots/ss${num}.jpg` }));
  const [current, setCurrent] = React.useState(0);
  const goTo = (idx: number) => setCurrent(idx);
  return (
    <div className="md:hidden">
      <div className="relative w-full">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <button
                key={slide.src}
                className="min-w-full flex items-center justify-center bg-white p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-transform active:scale-95 cursor-pointer"
                onClick={() => setModalImg(slide.src)}
                aria-label={`Show preview ${idx + 1}`}
              >
                <div className="rounded-2xl overflow-hidden w-full h-72 flex items-center justify-center bg-white">
                  <Image src={slide.src} alt="Preview" width={320} height={320} className="object-contain w-full h-full" />
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-pink-500' : 'bg-pink-200'}`}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
