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
  const [videPosition, setVideoPosition] = useState<
    "above" | "fixed" | "below"
  >("below");

  useEffect(() => {
    const options = { threshold: 0.4 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ boundingClientRect, isIntersecting }) => {
        if (isIntersecting) {
          setVideoPosition("fixed");
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
      <div
        className={cx("video")}
        style={{
          position: videPosition === "fixed" ? "fixed" : "absolute",
          top: videPosition === "above" ? "unset" : "0",
          bottom: videPosition === "above" ? "0" : "unset",
        }}
      >
        <video
          src={`/assets/videos/${video}`}
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
        />
        <div className={cx("shadow")} />
      </div>
      <div className={cx("content")}>
        <div className={cx("icon")}>
          {Array.from({ length }, (_, idx) => (
            <img
              key={`video-${index}-icon-${idx}`}
              src={`/assets/icons/${idx === index ? icon : "dot.svg"}`}
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
