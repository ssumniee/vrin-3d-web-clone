import { forwardRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const MainSection = forwardRef<HTMLDivElement | null>(function MainSection(
  _,
  ref
) {
  return (
    <div ref={ref} className={cx("section")}>
      <div className={cx("content-wrapper")}>
        <div className={cx("content")}>
          <span className={cx("title")}>
            <div>3D Model</div>
            <div>generated with AI</div>
          </span>
          <span className={cx("description")}>
            <div>Experience 3D model</div>
            <div>automatically generated by AI</div>
            <div>and easy-to-use editing.</div>
          </span>
          <Link to="/register" className={cx("button", "register")}>
            Get started for free
          </Link>
        </div>
      </div>
    </div>
  );
});

export default MainSection;
