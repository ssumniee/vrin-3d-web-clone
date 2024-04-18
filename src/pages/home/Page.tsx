import classNames from "classnames/bind";

import { HeaderComponent } from "../../components/header";
import { MainSection } from "./sections/main";
import { VideoSection } from "./sections/video";
import { languageOptions, videoDataList } from "./constant";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  return (
    <div className={cx("page")}>
      <HeaderComponent languageOptions={languageOptions} colorTheme="dark" />
      <MainSection />
      {videoDataList.map((data, idx, arr) => (
        <VideoSection
          key={`section-${idx}`}
          index={idx}
          length={arr.length}
          {...data}
        />
      ))}
    </div>
  );
}

export default HomePage;
