import pink from "../../assets/HomeIcon/pink.jpg";
import lila from "../../assets/HomeIcon/lila.jpg";
import cherry from "../../assets/HomeIcon/cherry.jpg";
import purple from "../../assets/HomeIcon/purple.jpg";
import dark from "../../assets/HomeIcon/dark.jpg";
import blue from "../../assets/HomeIcon/blue.jpg";

const images = [pink, purple, lila, dark, cherry, blue];

const Gallery = () => {
  return (
    <>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform"
        />
      ))}
    </>
  );
};

export default Gallery;