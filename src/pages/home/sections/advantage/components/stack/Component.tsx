import classNames from "classnames/bind";

import styles from "./style.module.scss";

type StackData = {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
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
  title,
  subTitle,
  description,
}: { index: number } & StackData) {
  return (
    <div className={cx("item")}>
      <div className={cx("title")}>
        {title}
        <img className={cx("icon")} src={`/assets/icons/${icon}`} />
      </div>
      <div className={cx("sub-title")}>{subTitle}</div>
      <div className={cx("description")}>{description}</div>
    </div>
  );
}

export default StackComponent;
