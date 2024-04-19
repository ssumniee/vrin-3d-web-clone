import classNames from "classnames/bind";

import styles from "./style.module.scss";

export type AdvantageData = {
  subTitle: string;
  title: string;
  descriptions?: string[];
  content: React.ReactNode;
};

type Props = AdvantageData;

const cx = classNames.bind(styles);

function AdvantageSection({
  subTitle,
  title,
  descriptions = [],
  content,
}: Props) {
  return (
    <div className={cx("section")}>
      <div className={cx("text")}>
        <div className={cx("sub-title")}>{subTitle}</div>
        <div className={cx("title")}>{title}</div>
        <div className={cx("description")}>
          {descriptions.map((description, idx) => (
            <div key={`advantage-${subTitle}-description-${idx}`}>
              {description}
            </div>
          ))}
        </div>
      </div>
      <div className={cx("content")}>{content}</div>
    </div>
  );
}

export default AdvantageSection;
