import type { LanguageOption } from "../../components/languageSelector/Component";
import type { VideoData } from "./sections/video/Section";
import type { AdvantageData } from "./sections/advantage/Section";

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

export const advantageDataList: AdvantageData[] = [
  {
    subTitle: "The simplest way to generate",
    title: "3D model production\nthat saves time and cost",
    descriptions: [
      "Make 3D model using only smartphone without heavy, expensive 3D scanner,",
      "save time and cost to produce the contents more effectively.",
    ],
    content: null,
  },
  {
    subTitle: "home.section3.title",
    title: "From scanning to editing\nat one go with VRIN 3D",
    content: null,
  },
  {
    subTitle: "Various contents with VRIN 3D",
    title: "Various contents\ncreated using 3D models",
    descriptions: [
      "Download 3D model VRIN 3D prefabricated, use it for promotion, VR showroom, commercial VFX.",
    ],
    content: null,
  },
];
