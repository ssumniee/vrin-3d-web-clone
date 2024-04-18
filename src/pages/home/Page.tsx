import classNames from "classnames/bind";

import { HeaderComponent } from "../../components/header";
import { VideoWrapperComponent } from "./components/videoWrapper";
import { languageOptions } from "./constant";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("page")}>
      <HeaderComponent languageOptions={languageOptions} colorTheme="dark" />
    </div>
  );
}

export default HomePage;
