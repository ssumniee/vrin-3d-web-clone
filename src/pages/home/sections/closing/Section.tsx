import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function ClosingSection() {
  return (
    <div className={cx("section")}>
      <div className={cx("message")}>Still hesitating?</div>
      <Link to="/register" className={cx("button", "register")}>
        Get started for free
      </Link>
    </div>
  );
}

export default ClosingSection;
