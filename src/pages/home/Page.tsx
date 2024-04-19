import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import { HeaderComponent } from "../../components/header";
import { MainSection } from "./sections/main";
import { VideoSection } from "./sections/video";
import { AdvantageSection } from "./sections/advantage";
import { ClosingSection } from "./sections/closing";
import { languageOptions, videoDataList, advantageDataList } from "./constant";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

function HomePage() {
  const mainRef = useRef<HTMLDivElement | null>(null);
  const [headerSimplified, setHeaderSimplified] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting }) => {
        setHeaderSimplified(!isIntersecting);
      });
    }, options);
    const target = mainRef.current;

    if (target) observer.observe(target);
  }, [mainRef]);

  return (
    <div className={cx("page")}>
      <HeaderComponent
        simplified={headerSimplified}
        languageOptions={languageOptions}
        colorTheme="dark"
      />
      <MainSection ref={mainRef} />
      {videoDataList.map((data, idx, arr) => (
        <VideoSection
          key={`video-section-${idx}`}
          index={idx}
          length={arr.length}
          {...data}
        />
      ))}
      {advantageDataList.map((data, idx) => (
        <AdvantageSection key={`advantage-section-${idx}`} {...data} />
      ))}
      <ClosingSection />
    </div>
  );
}

export default HomePage;
