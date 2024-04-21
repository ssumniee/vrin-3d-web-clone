import { useTranslation } from "react-i18next";
import classNames from "classnames/bind";

import { HeaderComponent } from "../../components/header";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className={cx("page")}>
      <HeaderComponent colorTheme="light" />
      <h1>{t("pricing.title")}</h1>
    </div>
  );
}

export default PricingPage;
