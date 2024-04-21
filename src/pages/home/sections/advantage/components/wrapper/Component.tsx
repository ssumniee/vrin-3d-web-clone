import classNames from "classnames/bind";

import styles from "./style.module.scss";

type AdvantageData = {
  title: string;
  subTitle: string;
  descriptions?: string[];
};

type Props = React.PropsWithChildren<{ index: number } & AdvantageData>;

const cx = classNames.bind(styles);

function AdvantageWrapperComponent({
  index,
  title,
  subTitle,
  descriptions = [],
  children,
}: Props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("text")}>
        <div className={cx("sub-title")}>{subTitle}</div>
        <div className={cx("title")}>{title}</div>
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
