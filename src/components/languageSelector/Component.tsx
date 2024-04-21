import { useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import { languageCodeNameMap } from "./constant";
import styles from "./style.module.scss";

export type LanguageCode = "ko" | "en";
export type LanguageName = "KOR" | "ENG";

type Props = {
  languages?: LanguageCode[];
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function LanguageSelectorComponent({
  languages = [...languageCodeNameMap.keys()],
  colorTheme,
}: Props) {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <div className={cx("component")} color-theme={colorTheme}>
      <button className={cx("button")} onClick={() => setOpen(!open)}>
        <span>{languageCodeNameMap.get(i18n.language as LanguageCode)}</span>
        <i className={`${cx("icon", "arrow")} material-icons`}>
          {open ? "expand_less" : "expand_more"}
        </i>
      </button>
      {open ? (
        <div className={cx("options")}>
          {languages.map((language) => (
            <div
              key={`option-${language}`}
              className={cx("option", { selected: language === i18n.language })}
              onClick={() => {
                i18n.changeLanguage(language);
                setOpen(false);
              }}
            >
              {languageCodeNameMap.get(language)}
              {language === i18n.language ? (
                <i className={`${cx("icon", "check")} material-icons`}>check</i>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default LanguageSelectorComponent;
