import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("page")}>
      <h1>Home</h1>
      <p>기본 페이지</p>
    </div>
  );
}

export default HomePage;
