import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function ClosingSection() {
  const { t } = useTranslation();

  return (
    <div className={cx("section")}>
      <div className={cx("message")}>{t("home.closing.title")}</div>
      <Link to="/register" className={cx("button", "register")}>
        {t("home.closing.register")}
      </Link>
    </div>
  );
}

export default ClosingSection;
