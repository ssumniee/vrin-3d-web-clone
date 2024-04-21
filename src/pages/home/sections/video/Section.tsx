import { useTranslation } from "react-i18next";

import VideoWrapperComponent from "./components/wrapper/Component";

function VideoSection() {
  const { t } = useTranslation();

  return (
    <>
      <VideoWrapperComponent
        index={0}
        length={3}
        icon={"camera.svg"}
        video={"home_content_1.mp4"}
        titles={[t("home.video1.title1"), t("home.video1.title2")]}
        descriptions={[
          t("home.video1.description1"),
          t("home.video1.description2"),
        ]}
      />
      <VideoWrapperComponent
        index={1}
        length={3}
        icon={"model.svg"}
        video={"home_content_2.mp4"}
        titles={[t("home.video2.title1"), t("home.video2.title2")]}
        descriptions={[t("home.video2.description1")]}
      />
      <VideoWrapperComponent
        index={2}
        length={3}
        icon={"sparkle.svg"}
        video={"home_content_3.mp4"}
        titles={[t("home.video3.title1"), t("home.video3.title2")]}
        descriptions={[t("home.video3.description1")]}
      />
    </>
  );
}

export default VideoSection;
