import Header from '../components/Header';
import Footer from '../components/Footer';

function Gallery() 
{
  // Create 12 empty placeholders
  const placeholders = Array.from({ length: 12 });

  return (
    <>
      <Header />

      {/* Main area fills the space between header/footer */}
      <main className="min-h-screen flex flex-col bg-beige">
        {/* Center the grid vertically & horizontally within the available space */}
        <section className="flex-1 flex items-center">
          <div className="w-full max-w-6xl mx-auto px-4">
            <h1 className="text-3xl font-unkempt almost-black text-center mb-8">Gallery</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {placeholders.map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full h-56"
                  // later: replace this div with an <img src=... /> and keep the wrapper styles
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Gallery;