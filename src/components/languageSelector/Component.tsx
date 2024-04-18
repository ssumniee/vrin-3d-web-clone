import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

export type LanguageOption = {
  label: "KOR" | "ENG" | "JPN";
  value: "KR" | "US" | "JP";
};

type Props = {
  languageOptions: LanguageOption[];
  colorTheme: "light" | "dark";
};

const cx = classNames.bind(styles);

function LanguageSelectorComponent({ languageOptions, colorTheme }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    sessionStorage.getItem("i18nextLng") || "US"
  );

  useEffect(() => {
    sessionStorage.setItem("i18nextLng", selected);
  }, [selected]);

  return (
    <div className={cx("component")} color-theme={colorTheme}>
      <button className={cx("button")} onClick={() => setOpen(!open)}>
        <span>
          {languageOptions.find(({ value }) => value === selected)?.label ||
            "ENG"}
        </span>
        <i className={`${cx("icon", "arrow")} material-icons`}>
          {open ? "expand_less" : "expand_more"}
        </i>
      </button>
      {open ? (
        <div className={cx("options")}>
          {languageOptions.map(({ label, value }) => (
            <div
              key={`option-${value}`}
              className={cx("option", { selected: selected === value })}
              onClick={() => {
                setSelected(value);
                setOpen(false);
              }}
            >
              {label}
              {selected === value ? (
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
