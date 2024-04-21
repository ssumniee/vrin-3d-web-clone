import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import useInterval from "../../../../../../hooks/useInterval";
import styles from "./style.module.scss";

type CardData<T = "video" | "screenshots"> = {
  type: T;
  titles: string[];
  descriptions: string[];
  image: string;
} & (T extends "video"
  ? { type: "video"; background: string; video: string }
  : { type: "screenshots"; screenshots: string[] });

type Props = {
  items: CardData[];
};

function isVideoCardData(data: CardData): data is CardData<"video"> {
  return data.type === "video";
}

function isScreenshotsCardData(
  data: CardData
): data is CardData<"screenshots"> {
  return data.type === "screenshots";
}

const cx = classNames.bind(styles);

function CardComponent({ items }: Props) {
  return (
    <div className={cx("component")}>
      {items.map((item, idx) => (
        <CardItem key={`card-item-${idx}`} index={idx} {...item} />
      ))}
    </div>
  );
}

function CardItem({ index, ...data }: { index: number } & CardData) {
  const [highlighted, setHighlighted] = useState(false);
  const { i18n } = useTranslation();

  return (
    <div
      className={cx("item", { highlighted })}
      onClick={() => {
        setHighlighted((current) => !current);
      }}
      onMouseEnter={() => {
        setHighlighted(true);
      }}
      onMouseLeave={() => {
        setHighlighted(false);
      }}
    >
      <div className={cx("text", i18n.language)}>
        <div className={cx("title")}>
          {data.titles.map((title, idx) => (
            <div key={`card-item-${index}-title-${idx}`}>{title}</div>
          ))}
        </div>
        <div className={cx("description")}>
          {data.descriptions.map((description, idx) => (
            <div key={`card-item-${index}-description-${idx}`}>
              {description}
            </div>
          ))}
        </div>
        {highlighted ? (
          <img
            className={cx("icon")}
            src="assets/icons/cross-circle.svg"
            alt=""
          />
        ) : (
          <img
            className={cx("icon")}
            src="assets/icons/arrow-circle-outward.svg"
            alt=""
          />
        )}
      </div>
      <div className={cx("content", i18n.language)}>
        <img
          className={cx(`${data.type}-main`)}
          src={`assets/images/${data.image}`}
          alt=""
        />
        {isVideoCardData(data) ? <VideoCardAnimation {...data} /> : null}
        {isScreenshotsCardData(data) ? (
          <ScreenshotsCardAnimation {...data} />
        ) : null}
      </div>
    </div>
  );
}

function VideoCardAnimation({ background, video }: CardData<"video">) {
  return (
    <>
      <img
        className={cx("video-background")}
        src={`assets/images/${background}`}
        alt=""
      />
      <video src={`assets/videos/${video}`} loop playsInline autoPlay muted />
    </>
  );
}

function ScreenshotsCardAnimation({ screenshots }: CardData<"screenshots">) {
  const [playingIdx, setPlayingIdx] = useState(0);

  useInterval(() => {
    setPlayingIdx((current) => {
      const next = current + 1;

      return next === screenshots.length ? 0 : next;
    });
  }, 1000);

  return (
    <>
      {screenshots.map((screenshot, idx) => (
        <img
          key={screenshot}
          className={cx("screenshot", idx)}
          src={`assets/images/${screenshot}`}
          style={{ opacity: idx === playingIdx ? 1 : 0 }}
          alt=""
        />
      ))}
    </>
  );
}

export default CardComponent;
