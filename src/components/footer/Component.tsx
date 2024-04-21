import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function FooterComponent() {
  const { t } = useTranslation();

  return (
    <div className={cx("component")}>
      <Link to="/register" className={cx("button", "register")}>
        {t("footer.register")}
      </Link>
    </div>
  );
}

export default FooterComponent;
