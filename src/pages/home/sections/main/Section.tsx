import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

const MainSection = forwardRef<HTMLDivElement | null>(function MainSection(
  _,
  ref
) {
  const { t } = useTranslation();

  return (
    <div ref={ref} className={cx("section")}>
      <div className={cx("content-wrapper")}>
        <div className={cx("content")}>
          <div className={cx("title")}>{t("home.main.title")}</div>
          <div className={cx("description")}>
            <div>{t("home.main.subTitle1")}</div>
            <div>{t("home.main.subTitle2")}</div>
            <div>{t("home.main.subTitle3")}</div>
          </div>
          <Link to="/register" className={cx("button", "register")}>
            {t("home.main.register")}
          </Link>
        </div>
      </div>
    </div>
  );
});

export default MainSection;
