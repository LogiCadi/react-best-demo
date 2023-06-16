import React from "react";
import { LayerTwo } from "./LayerTwo";
import { Ctx } from "./store";
import { css } from "@emotion/css";

export const LayerOne = () => {
  const { add } = React.useContext(Ctx);

  return (
    <div
      className={css`
        min-width: 40px;
        padding: 5px 10px;
        background-color: lightblue;
        border-radius: 10px;
        cursor: pointer;

        :hover {
          opacity: 0.7;
        }
      `}
      onClick={add}
    >
      <LayerTwo />
    </div>
  );
};
