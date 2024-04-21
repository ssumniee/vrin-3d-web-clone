import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { SizeContext } from "../../../../contexts/SizeContext";
import AdvantageWrapperComponent from "./components/wrapper/Component";
import { StackComponent } from "./components/stack";
import { CardComponent } from "./components/card";
import { SliderComponent } from "./components/slider";

function AdvantageSection() {
  const size = useContext(SizeContext);
  const { t, i18n } = useTranslation();

  return (
    <>
      <AdvantageWrapperComponent
        index={0}
        title={t("home.advantage1.title")}
        subTitle={t("home.advantage1.subTitle")}
        descriptions={[
          t("home.advantage1.description1"),
          t("home.advantage1.description2"),
        ]}
      >
        <StackComponent
          items={[
            {
              icon: "arrow-down.svg",
              title: "80%",
              subTitle: t("home.advantage1.content.item1.subTitle"),
              description: t("home.advantage1.content.item1.description"),
            },
            {
              icon: "arrow-down.svg",
              title: "4H",
              subTitle: t("home.advantage1.content.item2.subTitle"),
              description: t("home.advantage1.content.item2.description"),
            },
            {
              icon: "arrow-down.svg",
              title: "90%",
              subTitle: t("home.advantage1.content.item3.subTitle"),
              description: t("home.advantage1.content.item3.description"),
            },
          ]}
        />
      </AdvantageWrapperComponent>
      <AdvantageWrapperComponent
        index={1}
        title={t("home.advantage2.title")}
        subTitle={t("home.advantage2.subTitle")}
      >
        <CardComponent
          items={[
            {
              type: "video",
              titles: [
                t("home.advantage2.content.item1.title1"),
                t("home.advantage2.content.item1.title2"),
                t("home.advantage2.content.item1.title3"),
              ],
              descriptions: [
                t("home.advantage2.content.item1.description1"),
                t("home.advantage2.content.item1.description2"),
                t("home.advantage2.content.item1.description3"),
                t("home.advantage2.content.item1.description4"),
              ],
              image: `home_C-1_${size}_${i18n.language}.png`,
              background: `home_C-3_${size}.png`,
              video: `home_2.mp4`,
            },
            {
              type: "screenshots",
              titles: [
                t("home.advantage2.content.item2.title1"),
                t("home.advantage2.content.item2.title2"),
                t("home.advantage2.content.item2.title3"),
                t("home.advantage2.content.item2.title4"),
              ],
              descriptions: [
                t("home.advantage2.content.item2.description1"),
                t("home.advantage2.content.item2.description2"),
                t("home.advantage2.content.item2.description3"),
              ],
              image: `home_C-2_${size}_${i18n.language}.png`,
              screenshots: [
                "home_bag_1.png",
                "home_bag_2.png",
                "home_bag_3.png",
                "home_bag_4.png",
                "home_bag_5.png",
                "home_bag_6.png",
                "home_bag_7.png",
                "home_bag_8.png",
                "home_bag_9.png",
                "home_bag_10.png",
              ],
            },
          ]}
        />
      </AdvantageWrapperComponent>
      <AdvantageWrapperComponent
        index={2}
        title={t("home.advantage3.title")}
        subTitle={t("home.advantage3.subTitle")}
        descriptions={[
          t("home.advantage3.description1"),
          t("home.advantage3.description2"),
        ]}
      >
        <SliderComponent
          items={[
            {
              title: t("home.advantage3.content.item1.title"),
              image: `carousel_thumbnail_1_${size}.png`,
            },
            {
              title: t("home.advantage3.content.item2.title"),
              image: `carousel_thumbnail_2_${size}.png`,
            },
            {
              title: t("home.advantage3.content.item3.title"),
              image: `carousel_thumbnail_3_${size}.png`,
            },
          ]}
        />
      </AdvantageWrapperComponent>
    </>
  );
}

export default AdvantageSection;
