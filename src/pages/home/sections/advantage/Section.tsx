import AdvantageWrapperComponent from "./components/wrapper/Component";
import { StackComponent } from "./components/stack";
import { CardComponent } from "./components/card";
import { SliderComponent } from "./components/slider";

function AdvantageSection() {
  return (
    <>
      <AdvantageWrapperComponent
        index={0}
        titles={["3D model production", "that saves time and cost"]}
        subTitles={["The simplest way to generate"]}
        descriptions={[
          "Make 3D model using only smartphone without heavy, expensive 3D scanner,",
          "save time and cost to produce the contents more effectively.",
        ]}
      >
        <StackComponent
          items={[
            {
              icon: "arrow-down.svg",
              titles: ["80%"],
              subTitles: ["Cost-saving", "on equipment"],
              descriptions: ["Based on 3D Scanner"],
            },
            {
              icon: "arrow-down.svg",
              titles: ["4H"],
              subTitles: ["Time reduced"],
              descriptions: ["Based on modeler work"],
            },
            {
              icon: "arrow-down.svg",
              titles: ["90%"],
              subTitles: ["Cost-saving", "on asset production"],
              descriptions: ["Based on modeler labor cost"],
            },
          ]}
        />
      </AdvantageWrapperComponent>
      <AdvantageWrapperComponent
        index={1}
        titles={["From scanning to editing", "at one go with VRIN 3D"]}
        subTitles={["home.section3.title"]}
        descriptions={[
          "Make 3D model using only smartphone without heavy, expensive 3D scanner,",
          "save time and cost to produce the contents more effectively.",
        ]}
      >
        <CardComponent
          items={[
            {
              type: "video",
              titles: ["Mobile-based", "Easy-to-use", "3D scanning"],
              descriptions: [
                "3D scanning made possible",
                "for anyone, anywhere",
                "Without studio",
                "and expensive scanner",
              ],
              image: "home_C-1_PC_en.png",
              background: "home_C-3_PC.png",
              video: "home_2_PC.mp4",
            },
            {
              type: "screenshots",
              titles: ["VRIN 3D editor,", "anyone can", "edit easily"],
              descriptions: [
                "Quickly edit asset with",
                "AI-generated material",
                "background editing",
              ],
              image: "home_C-2_PC_en.png",
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
        titles={["Various contents", "created using 3D models"]}
        subTitles={["Various contents with VRIN 3D"]}
        descriptions={[
          "Download 3D model VRIN 3D prefabricated, use it for promotion, VR showroom, commercial VFX.",
        ]}
      >
        <SliderComponent
          items={[
            { title: "Virtual Showroom", image: "carousel_thumbnail_1_PC.png" },
            { title: "Exhibition", image: "carousel_thumbnail_2_PC.png" },
            {
              title: "Product Promotion",
              image: "carousel_thumbnail_3_PC.png",
            },
          ]}
        />
      </AdvantageWrapperComponent>
    </>
  );
}

export default AdvantageSection;
