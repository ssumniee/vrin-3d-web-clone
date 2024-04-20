import { useRef } from "react";
import classNames from "classnames/bind";
import Slider from "react-slick";

import styles from "./style.module.scss";
import { MouseEventHandler } from "react";

type Props = {
  // image: string;
};

const cx = classNames.bind(styles);

function SliderComponent({}: Props) {
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div className={cx("component")}>
      <img className={cx("container")} src="/assets/images/home_D-1_PC.png" />
      <div className={cx("slider")}>
        <Slider
          ref={sliderRef}
          {...{
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          }}
        >
          <div className={cx("slide")}>
            <img
              className={cx("background")}
              src="/assets/images/carousel_thumbnail_1_PC.png"
            />
            <div className={cx("title")}>
              <div>Virtual Showroom</div>
              <img
                className={cx("icon")}
                src="/assets/icons/arrow-outward.svg"
              />
            </div>
          </div>
          <div className={cx("slide")}>
            <img
              className={cx("background")}
              src="/assets/images/carousel_thumbnail_2_PC.png"
            />
            <div className={cx("title")}>
              <div>Exhibition</div>
              <img
                className={cx("icon")}
                src="/assets/icons/arrow-outward.svg"
              />
            </div>
          </div>
          <div className={cx("slide")}>
            <img
              className={cx("background")}
              src="/assets/images/carousel_thumbnail_3_PC.png"
            />
            <div className={cx("title")}>
              <div>Product Promotion</div>
              <img
                className={cx("icon")}
                src="/assets/icons/arrow-outward.svg"
              />
            </div>
          </div>
        </Slider>
        <div className={cx("arrows")}>
          <button className={cx("arrow", "prev")} onClick={handlePrevClick}>
            <img src="/assets/icons/arrow-circle-left.svg" />
          </button>
          <button className={cx("arrow", "next")} onClick={handleNextClick}>
            <img src="/assets/icons/arrow-circle-right.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
