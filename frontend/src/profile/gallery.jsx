import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import star from '../assets/star.png';
import swirl from '../assets/swirl.png';
import { getGalleryImages } from '../utils/api';

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const MIN_SLOTS = 0;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await getGalleryImages();
        setGallery(response.galleryImages || []);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const totalSlots = Math.max(MIN_SLOTS, gallery.length);

  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col bg-beige">
        <section className="flex-1 flex items-start pt-8 md:pt-12">
          <div className="w-full max-w-6xl mx-auto px-4">
            {/* Title + side icons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={star}
                alt="Star"
                className="w-18 h-18 sm:w-14 sm:h-14 pointer-events-none select-none animate-tilt-snap-2"
              />
              <h1 className="text-5xl font-kavivanar text-center text-[#749DA1]">
                G A L L E R Y
              </h1>
              <img
                src={swirl}
                alt="Swirl"
                className="w-18 h-18 sm:w-14 sm:h-14 pointer-events-none select-none animate-tilt-snap-2"
              />
            </div>

            <p className="text-2xl font-unkempt text-center mb-6 text-[#424C51]">
              Save your work and see how far you've come!
            </p>

            {/* Grid: 1/2/3/4 columns by breakpoint; rows auto-add when items > columns */}
            {/* Grid: 1/2/3/4 columns by breakpoint; rows auto-add when items > columns */}
            {loading ? (
              <p className="text-center">Loading gallery...</p>
            ) : gallery.length === 0 ? (
              <p className="text-center almost-black mt-50">Nothing in the gallery.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gallery.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full h-56 overflow-hidden"
                  >
                    {item ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title || 'Gallery item'}
                        className="w-full h-full object-cover"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Gallery;