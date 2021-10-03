import { FluidContainer } from "@makinox/makinox-ui";
import React from "react";
import AssetContainerStyles from "./AssetContainer.styled";

export default function AssetContainer() {
  return (
    <section
      className={`flex justify-between ${FluidContainer()} ${AssetContainerStyles()}`}
    >
      <article>
        <span>Title</span>
        <span>Description</span>
      </article>
      <article>
        <span>Title</span>
        <span>Description</span>
      </article>
      <article>
        <span>Title</span>
        <span>Description</span>
      </article>
    </section>
  );
}
