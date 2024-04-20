import classNames from "classnames/bind";

import styles from "./style.module.scss";

type AdvantageData = {
  titles: string[];
  subTitles: string[];
  descriptions?: string[];
};

type Props = React.PropsWithChildren<{ index: number } & AdvantageData>;

const cx = classNames.bind(styles);

function AdvantageWrapperComponent({
  index,
  titles,
  subTitles,
  descriptions = [],
  children,
}: Props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("text")}>
        <div className={cx("sub-title")}>
          {subTitles.map((subTitle, idx) => (
            <div key={`advantage-wrapper-${index}-sub-title-${idx}`}>
              {subTitle}
            </div>
          ))}
        </div>
        <div className={cx("title")}>
          {titles.map((title, idx) => (
            <div key={`advantage-wrapper-${index}-title-${idx}`}>{title}</div>
          ))}
        </div>
        <div className={cx("description")}>
          {descriptions.map((description, idx) => (
            <div key={`advantage-wrapper-${index}-description-${idx}`}>
              {description}
            </div>
          ))}
        </div>
      </div>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default AdvantageWrapperComponent;
