import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselComponent.css";
import { Button } from "@material-tailwind/react";

const CarouselComponent = () => {
  return (
    <>
      <div className="carousel-wrapper">
        <Carousel
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          dynamicHeight={true}
          autoPlay={true}
          interval={3000}
        >
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/design-space-decorated-with-leaves-website-banner-template_53876-129927.jpg?w=1380&t=st=1700308920~exp=1700309520~hmac=0f35cc91a781d8d2f827de964ce71905038c448efb0594959633b96d16062a2d"
              alt="Slide 1"
            />
            <div className="overlay-text">
              Nice work <br />
              <Button>Button1</Button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/abstract-smooth-dark-blue-with-black-vignette-studio-well-use-as-backgroundbusiness-reportdigitalwebsite-templatebackdrop_1258-108878.jpg?w=1380&t=st=1700308997~exp=1700309597~hmac=86f6f6c512fa53f7f27fbb0b9654360695a4a2848159952631b0809782842be5"
              alt="Slide 1"
            />
            <div className="overlay-text">
              Plain Work <br />
              <Button>Button1</Button>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://img.freepik.com/premium-photo/nature-flower-using-as-spring-summer-cover-page-background_103077-86.jpg?w=1380"
              alt="Slide 1"
            />
            <div className="overlay-text">
              Flower work <br />
              <Button>Button1</Button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComponent;
