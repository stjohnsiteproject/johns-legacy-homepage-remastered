
import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    title: "Academic Blocks",
    src: "https://raw.githubusercontent.com/dhruvrakesh/johns-legacy-homepage-remastered/main/public/images/about-us22.png",
    alt: "Academic Blocks"
  },
  {
    title: "Sports Facilities",
    src: "https://raw.githubusercontent.com/dhruvrakesh/johns-legacy-homepage-remastered/main/public/images/100.jpg",
    alt: "Sports Facilities"
  },
  {
    title: "Assembly Grounds",
    src: "https://placehold.co/600x400?text=Assembly+Grounds",
    alt: "Assembly Grounds"
  },
  {
    title: "Labs & Library",
    src: "https://placehold.co/600x400?text=Labs+and+Library",
    alt: "Labs and Library"
  },
  {
    title: "Annual Day",
    src: "https://placehold.co/600x400?text=Annual+Day",
    alt: "Annual Day"
  },
  {
    title: "Sports Day",
    src: "https://placehold.co/600x400?text=Sports+Day",
    alt: "Sports Day"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-stjohns-navy mb-4">Life at St. John's</h2>
        <p className="text-lg mb-8">A glimpse of our campus, culture, and celebrations.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-stjohns-navy">{image.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
