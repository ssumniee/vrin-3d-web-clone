import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function LoginPage() {
  return (
    <div className={cx("page")}>
      <h1>Login</h1>
      <p>로그인 페이지</p>
    </div>
  );
}

export default LoginPage;
