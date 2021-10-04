import React from "react";
import { FluidContainer } from "@makinox/makinox-ui";

import AssetCard from "../AssetCard/AssetCard";
import AssetContainerStyles from "./AssetContainer.styled";

export default function AssetContainer() {
  return (
    <section
      className={`flex justify-between ${FluidContainer()} ${AssetContainerStyles()}`}
    >
      <AssetCard title="titulo" subtitle="subtitle" />
      <AssetCard title="titulo" subtitle="subtitle" />
      <AssetCard title="titulo" subtitle="subtitle" />
    </section>
  );
}
