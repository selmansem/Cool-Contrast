import type { MetadataRoute } from "next";

interface Screenshot {
  src: string;
  sizes?: string;
  type?: string;
  form_factor?: "wide" | "narrow"; // not defined in NextJS manifest-types.d.ts
}

/**
 * Extends the Manifest interface with additional properties.
 * screenshot: An array of screenshots for the web application. Required to make the site installable.
 */
interface Manifest extends MetadataRoute.Manifest {
  screenshots: Screenshot[];
}

export default function manifest(): Manifest {
  return {
    id: "/",
    start_url: "/",
    name: "Cool Contrast",
    short_name: "Cool Contrast",
    description: "Check color pairings for contrast, ensuring alignment with WCAG guidelines",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "fullscreen",
    orientation: "portrait",
    screenshots: [
      {
        src: "/screenshot_wide.png",
        sizes: "1920x1440",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot_narrow.png",
        sizes: "1080x1920",
        type: "image/png",
      },
    ],
  };
}
