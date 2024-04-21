import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

type VideoData = {
  icon: string;
  video: string;
  titles: string[];
  descriptions: string[];
};

type Props = {
  index: number;
  length: number;
} & VideoData;

const cx = classNames.bind(styles);

function VideoWrapperComponent({
  index,
  length,
  icon,
  video,
  titles,
  descriptions,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [videoPosition, setVideoPosition] = useState<
    "above" | "on-screen" | "below"
  >("below");

  useEffect(() => {
    const options = { threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ boundingClientRect, isIntersecting }) => {
        if (isIntersecting) {
          setVideoPosition("on-screen");
        } else {
          setVideoPosition(boundingClientRect.top >= 0 ? "below" : "above");
        }
      });
    }, options);
    const target = ref.current;

    if (target) observer.observe(target);
  }, [ref]);

  return (
    <div ref={ref} id={`video-wrapper-${index}`} className={cx("wrapper")}>
      <div className={cx("video", videoPosition)}>
        <video
          src={`assets/videos/${video}`}
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
        />
        <div className={cx("shadow")} />
      </div>
      <div className={cx("content")}>
        <div className={cx("icon")}>
          {Array.from({ length }, (_, idx) => (
            <img
              key={`video-${index}-icon-${idx}`}
              src={`assets/icons/${idx === index ? icon : "dot.svg"}`}
              alt=""
            />
          ))}
        </div>
        <div className={cx("text")}>
          <div className={cx("title")}>
            {titles.map((title, idx) => (
              <div key={`video-wrapper-${index}-title-${idx}`}>{title}</div>
            ))}
          </div>
          <div className={cx("description")}>
            {descriptions.map((description, idx) => (
              <div key={`video-wrapper-${index}-description-${idx}`}>
                {description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWrapperComponent;
