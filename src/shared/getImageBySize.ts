import type { Media } from "./payload-types";

const SIZES = ["thumbnail", "large", "medium", "small", "default"] as const;

type Size = (typeof SIZES)[number];

export const getImageBySize = (media: Media, size: Size = "default") => {
  if (size === "default") {
    return media.url.startsWith("http")
      ? media.url
      : media.thumbnailURL.startsWith("http")
        ? media.thumbnailURL
        : `${import.meta.env.UPLOADTHING_STORAGE_URL}/f/${media._key}`;
  }

  const imageSize = media.sizes[size];
  if (imageSize) {
    const url = imageSize.url;
    // check if the url contains valid url
    const isValidUrl = url.startsWith("http");
    if (isValidUrl) {
      return url;
    }

    return `${import.meta.env.UPLOADTHING_STORAGE_URL}/f/${imageSize._key}`;
  }

  return media.url;
};
