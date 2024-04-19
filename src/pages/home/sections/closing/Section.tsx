import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function ClosingSection() {
  return (
    <div className={cx("section")}>
      <div className={cx("message")}>Still hesitating?</div>
      <button className={cx("button", "register")}>Get started for free</button>
    </div>
  );
}

export default ClosingSection;
