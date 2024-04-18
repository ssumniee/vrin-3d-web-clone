import classNames from "classnames/bind";

import styles from "./style.module.scss";

type Props = {
  simplified?: boolean;
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function HeaderComponent({ simplified = false, colorTheme }: Props) {
  return (
    <div className={cx("component", { simplified })} color-theme={colorTheme}>
      <div className={cx("logo")}>
        <i className={cx("icon")}></i>
      </div>
      <div className={cx("buttons")}>
        {simplified ? (
          <p className={cx("message")}>If you want to use VRIN 3D</p>
        ) : (
          <>
            <button className={cx("button", "pricing")}>Pricing</button>
            <button className={cx("button", "language")}>ENG</button>
            <button className={cx("button", "login")}>Log in</button>
          </>
        )}
        <button className={cx("button", "register")}>
          Get started for free
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
