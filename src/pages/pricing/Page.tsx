import classNames from "classnames/bind";

import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function PricingPage() {
  return (
    <div className={cx("page")}>
      <h1>Pricing</h1>
      <p>가격 안내 페이지</p>
    </div>
  );
}

export default PricingPage;
