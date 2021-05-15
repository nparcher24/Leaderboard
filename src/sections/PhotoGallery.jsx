import React from "react";
import MobilePhotoCarousel from "../components/MobilePhotoCarousel";

export default function PhotoGallery(props) {
  const [renderMobile, setRendermobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      const minWidth = 1024;
      const windowWidth = window.innerWidth;
      if (windowWidth > minWidth) {
        setRendermobile(false);
      } else {
        setRendermobile(true);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    firstImage,
    secondImage,
    thirdImage,
    fourthImage,
    fifthImage,
  } = props.imageDict;

  return (
    <div>
      {renderMobile ? (
        <MobilePhotoCarousel {...props} />
      ) : (
        <section className="">
          <div className="container mx-auto">
            <div class="flex flex-wrap -m-px">
              <div className="w-full lg:w-1/2 p-px">
                <img
                  class="w-full h-72 object-cover"
                  src={firstImage.url}
                  alt={firstImage.altText}
                />
              </div>
              <div className="w-full lg:w-1/2 p-px">
                <img
                  class="w-full h-72 object-cover"
                  src={secondImage.url}
                  alt={secondImage.altText}
                />
              </div>
              <div className="w-full lg:w-1/3 p-px">
                <img
                  class="w-full h-72 object-cover"
                  src={thirdImage.url}
                  alt={thirdImage.altText}
                />
              </div>
              <div className="w-full lg:w-1/3 p-px">
                <img
                  class="w-full h-72 object-cover"
                  src={fourthImage.url}
                  alt={fourthImage.altText}
                />
              </div>
              <div className="w-full lg:w-1/3 p-px">
                <img
                  class="w-full h-72 object-cover"
                  src={fifthImage.url}
                  alt={fifthImage.altText}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
