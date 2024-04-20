import classNames from "classnames/bind";

import styles from "./style.module.scss";

type StackData = {
  icon: string;
  titles: string[];
  subTitles: string[];
  descriptions: string[];
};

type Props = {
  items: StackData[];
};

const cx = classNames.bind(styles);

function StackComponent({ items }: Props) {
  return (
    <div className={cx("component")}>
      {items.map((item, idx) => (
        <StackItem key={`stack-item-${idx}`} index={idx} {...item} />
      ))}
    </div>
  );
}

function StackItem({
  index,
  icon,
  titles,
  subTitles,
  descriptions,
}: { index: number } & StackData) {
  return (
    <div className={cx("item")}>
      <div className={cx("title")}>
        <div>
          {titles.map((title, idx) => (
            <div key={`stack-item-${index}-title-${idx}`}>{title}</div>
          ))}
        </div>
        <img className={cx("icon")} src={`/assets/icons/${icon}`} />
      </div>
      <div className={cx("sub-title")}>
        {subTitles.map((subTitle, idx) => (
          <div key={`stack-item-${index}-subTitle-${idx}`}>{subTitle}</div>
        ))}
      </div>
      <div className={cx("description")}>
        {descriptions.map((description, idx) => (
          <div key={`stack-item-${index}-description-${idx}`}>
            {description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackComponent;
