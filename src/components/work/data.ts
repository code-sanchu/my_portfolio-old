import { sliderImage, amyImage } from "~images/index";

import type { Project } from "~types/index";

export const projects: Project[] = [
  {
    id: "alesh",
    title: { type: "text", text: ["Alesh", "Compton"] },
    image: sliderImage.alesh,
    description: {
      siteAbout: "Video artist and photographer portfolio",
      siteType: "website",
    },
    link: {
      text: "visit site",
      url: "https://aleshcompton.com",
      type: "external",
    },
  },
  {
    id: "birch",
    title: { type: "text", text: "Birch Collective" },
    image: sliderImage.birch,
    description: {
      siteAbout: "British based charity",
      siteType: "website & cms",
    },
    link: {
      text: "visit site",
      url: "https://www.thebirchcollective.co.uk/",
      type: "external",
    },
  },
  {
    id: "asatic",
    title: { type: "text", text: "ASATiC" },
    image: sliderImage.asatic,
    description: {
      siteAbout: "Multilingual online news journal",
      siteType: "website & cms",
    },
    link: {
      text: "view project",
      url: "/work/asatic",
      type: "internal",
    },
  },
  {
    id: "amy",
    title: { type: "image", url: amyImage.logo },
    image: sliderImage.amy,
    description: {
      siteAbout: "Jewellery portfolio and shop",
      siteType: "website",
    },
    link: {
      text: "visit site",
      url: "https://www.amyrodriguez.art/portfolio/1",
      type: "external",
    },
  },
  {
    id: "piros",
    title: { type: "text", text: ["Piros", "Photography"] },
    image: sliderImage.piros,
    description: {
      siteAbout: "Photograpy portfolio",
      siteType: "website & cms",
    },
    link: {
      text: "visit site",
      url: "https://piros.photography",
      type: "external",
    },
  },
];
