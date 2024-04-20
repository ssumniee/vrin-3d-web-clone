import VideoWrapperComponent from "./components/wrapper/Component";
import { videoDataList } from "./constant";

function VideoSection() {
  return (
    <>
      {videoDataList.map((data, idx, arr) => (
        <VideoWrapperComponent
          key={`video-wrapper-${idx}`}
          index={idx}
          length={arr.length}
          {...data}
        />
      ))}
    </>
  );
}

export default VideoSection;
