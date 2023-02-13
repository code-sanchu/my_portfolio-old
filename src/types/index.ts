export type Project = {
  id: string;
  title:
    | { type: "image"; url: ImageMetadata }
    | { type: "text"; text: string | string[] };
  image: ImageMetadata;
  link: {
    text: string;
    url: string;
    type: "internal" | "external";
  };
  description: { siteType: string; siteAbout: string };
};
