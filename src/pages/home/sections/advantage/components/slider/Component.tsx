import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

type SlideData = {
  title: string;
  image: string;
};

type Props = {
  items: SlideData[];
  settings?: Settings;
};

const cx = classNames.bind(styles);

function SliderComponent({ items, settings = {} }: Props) {
  const sliderRef = useRef<Slider | null>(null);
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    ...settings,
  };

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
        <Slider ref={sliderRef} {...sliderSettings}>
          {items.map(({ title, image }, idx) => (
            <div key={`slide-${idx}`} className={cx("slide")}>
              <img
                className={cx("background")}
                src={`/assets/images/${image}`}
              />
              <div className={cx("title")}>
                <div>{title}</div>
                <img
                  className={cx("icon")}
                  src="/assets/icons/arrow-outward.svg"
                />
              </div>
            </div>
          ))}
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
