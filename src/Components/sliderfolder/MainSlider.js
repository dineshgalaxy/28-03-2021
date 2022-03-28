import ImageSlider from "./Slider";
import "./mainSlider.scss"
import MultrowSlider from "./MultrowSlider";
import Testimonials from "./Testimonials";
function MainSlider() {
  return (
    <div className="container mt-5 carousel">
      <Testimonials />
      <MultrowSlider />

      <ImageSlider />
    </div>
  );
}

export default MainSlider;

//npm install react-slick --save
//npm install slick-carousel (this is for slick-carousel for css and font)