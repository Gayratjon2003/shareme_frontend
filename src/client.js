import React from "react";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
