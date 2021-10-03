import React from "react";
import { FluidContainer } from "@makinox/makinox-ui";

import AssetCard from "@components/AssetCard/AssetCard";
import AssetContainerStyles from "./AssetContainer.styled";

export default function AssetContainer() {
  return (
    <section
      className={`flex justify-between ${FluidContainer()} ${AssetContainerStyles()}`}
    >
      <AssetCard title="titulo" description="subtitle" />
      <AssetCard title="titulo" description="subtitle" />
      <AssetCard title="titulo" description="subtitle" />
    </section>
  );
}
