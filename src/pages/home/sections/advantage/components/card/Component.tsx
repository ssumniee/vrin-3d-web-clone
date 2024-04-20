import { useState } from "react";
import classNames from "classnames/bind";

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

  return (
    <div
      className={cx("item")}
      onMouseEnter={() => {
        setHighlighted(true);
      }}
      onMouseLeave={() => {
        setHighlighted(false);
      }}
    >
      <div className={cx("text")}>
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
        {highlighted ? null : (
          <img
            className={cx("icon")}
            src="/assets/icons/arrow-circle-outward.svg"
          />
        )}
      </div>
      <div className={cx("content")}>
        <img
          className={cx("main", data.type)}
          src={`/assets/images/${data.image}`}
        />
        {isVideoCardData(data) ? (
          <>
            <img
              className={cx("background")}
              src={`/assets/images/${data.background}`}
            />
            <video
              src={`/assets/videos/${data.video}`}
              loop
              playsInline
              autoPlay
            />
          </>
        ) : null}
        {isScreenshotsCardData(data)
          ? data.screenshots.map((screenshot, idx) => (
              <img
                key={screenshot}
                className={cx("screenshot", idx)}
                src={`/assets/images/${screenshot}`}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default CardComponent;
