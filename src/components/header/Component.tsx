import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import { LanguageSelectorComponent } from "../languageSelector";
import type { LanguageCode } from "../languageSelector/Component";
import styles from "./style.module.scss";

type Props = {
  simplified?: boolean;
  languages?: LanguageCode[];
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function HeaderComponent({ simplified = false, languages, colorTheme }: Props) {
  const { t } = useTranslation();

  return (
    <div className={cx("component", { simplified })} color-theme={colorTheme}>
      <div className={cx("logo")}>
        <i className={cx("icon")} />
      </div>
      <div className={cx("buttons")}>
        {simplified ? (
          <p className={cx("message")}>{t("header.message")}</p>
        ) : (
          <>
            <Link to="/pricing" className={cx("button", "pricing")}>
              {t("header.pricing")}
            </Link>
            <LanguageSelectorComponent
              colorTheme={colorTheme}
              languages={languages}
            />
            <Link to="/login" className={cx("button", "login")}>
              {t("header.login")}
            </Link>
          </>
        )}
        <Link to="/register" className={cx("button", "register")}>
          {t("header.register")}
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent;
