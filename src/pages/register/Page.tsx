import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function RegisterPage() {
  return (
    <div className={cx("page")}>
      <h1>Register</h1>
      <p>등록 페이지</p>
    </div>
  );
}

export default RegisterPage;
