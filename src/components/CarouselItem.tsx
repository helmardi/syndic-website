import { useNavigate } from "react-router-dom";

const CarouselItem: React.FC<{ imageUrl: string; title: string; subtitle: string; cta: string; link: string }> = ({ imageUrl, title, subtitle, cta, link }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex-shrink-0 flex items-center justify-center bg-cover bg-center h-screen" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="text-center text-white bg-black/50 p-6 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-6">{subtitle}</p>
        <button
          onClick={() => {
            console.log(`CTA Clicked: ${cta} | Navigating to: ${link}`); // Debugging log
            navigate(link);
          }}
          className="bg-[#FF5A00] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#e04e00] transition-all"
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

export default CarouselItem;