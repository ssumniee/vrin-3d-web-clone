import type { LanguageOption } from "../../components/languageSelector/Component";
import type { VideoData } from "./sections/video/Section";

export const languageOptions: LanguageOption[] = [
  { label: "KOR", value: "KR" },
  { label: "ENG", value: "US" },
  { label: "JPN", value: "JP" },
];

export const videoDataList: VideoData[] = [
  {
    icon: "camera.svg",
    video: "home_content_1.mp4",
    titles: ["Convenient 3D scanning", "on Mobile Devices"],
    descriptions: ["Without any studio or fancy scanner", "Anyone, Anywhere."],
  },
  {
    icon: "model.svg",
    video: "home_content_2.mp4",
    titles: ["Faster and more realistic", "with our AI technology"],
    descriptions: ["Create 3D model now."],
  },
  {
    icon: "sparkle.svg",
    video: "home_content_3.mp4",
    titles: ["Easy editing of 3D model", "and versatile application"],
    descriptions: ["Start creating with VRIN 3D."],
  },
];
