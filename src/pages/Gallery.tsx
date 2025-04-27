
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GallerySection from '@/components/gallery/GallerySection'
import ContactSection from '@/components/contact/ContactSection'
import FormsSection from '@/components/forms/FormsSection'
import AlumniSection from '@/components/alumni/AlumniSection'

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GallerySection />
        <ContactSection />
        <FormsSection />
        <AlumniSection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
