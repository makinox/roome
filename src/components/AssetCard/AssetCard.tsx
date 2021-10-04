import React, { useContext } from "react";
import { Card } from "@makinox/makinox-ui";

import { AppContext } from "../../context/context";

export default function AssetCard({ title, subtitle }) {
  const { isDark } = useContext(AppContext);

  return (
    <article className={Card({ isDark, type: "outlined" })}>
      {/* <div className="card-media">
        <GatsbyImage image={image} alt={el.imgAlt} />
      </div> */}
      <div className="card-header">
        <h6>{title}</h6>
        <span>{subtitle}</span>
      </div>
      {/* <div className="card-body">
        <p className="body2">{el.techList.join(" - ")}</p>
      </div>
      <div className="card-bottom">
        {CardButtons.map((mapedButton) => mapedButton)}
      </div> */}
    </article>
  );
}
