import React from "react";
import { Ctx } from "./store";

export const LayerTwo = () => {
  const { count } = React.useContext(Ctx);

  return <span>{count}</span>;
};
