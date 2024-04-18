import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";
import { LanguageSelectorComponent } from "../languageSelector";
import type { LanguageOption } from "../languageSelector/Component";

type Props = {
  simplified?: boolean;
  languageOptions: LanguageOption[];
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function HeaderComponent({
  simplified = false,
  languageOptions,
  colorTheme,
}: Props) {
  return (
    <div className={cx("component", { simplified })} color-theme={colorTheme}>
      <div className={cx("logo")}>
        <i className={cx("icon")} />
      </div>
      <div className={cx("buttons")}>
        {simplified ? (
          <p className={cx("message")}>If you want to use VRIN 3D</p>
        ) : (
          <>
            <Link to="/pricing" className={cx("button", "pricing")}>
              Pricing
            </Link>
            <LanguageSelectorComponent
              colorTheme={colorTheme}
              languageOptions={languageOptions}
            />
            <Link to="/login" className={cx("button", "login")}>
              Log in
            </Link>
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
