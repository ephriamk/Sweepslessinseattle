import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sweepsless in Seattle",
    short_name: "Sweepsless",
    description:
      "Professional house cleaning in Woodinville, Kirkland, Bellevue, and the greater Eastside. Non-toxic, plant-based care. No contracts.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#C41E3A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
