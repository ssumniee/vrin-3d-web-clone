import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import { LanguageSelectorComponent } from "../languageSelector";
import { languageCodeNameMap } from "../languageSelector/constant";
import type { LanguageCode } from "../languageSelector/Component";
import styles from "./style.module.scss";

type Props = {
  simplified?: boolean;
  languages?: LanguageCode[];
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function HeaderComponent({
  simplified = false,
  languages = [...languageCodeNameMap.keys()],
  colorTheme,
}: Props) {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className={cx("component", { simplified })} color-theme={colorTheme}>
      <div className={cx("component-wrapper")}>
        <div className={cx("icons")}>
          <i
            className={cx("icon", open ? "cross" : "hamburger")}
            onClick={() => {
              setOpen((current) => !current);
            }}
          />
          <i className={cx("icon", "logo")} />
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
                className={cx("button", "language")}
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
      <div className={cx("tab", { open })}>
        <Link to="/pricing" className={cx("item", "pricing")}>
          {t("header.pricing")}
        </Link>
        <div className={cx("item", "language")}>
          {languages.map((language, idx, arr) => (
            <React.Fragment key={`language-item-${language}`}>
              <span
                className={cx({ selected: language === i18n.language })}
                onClick={() => {
                  i18n.changeLanguage(language);
                }}
              >
                {languageCodeNameMap.get(language)}
              </span>
              {idx < arr.length - 1 ? <div className={cx("divider")} /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
