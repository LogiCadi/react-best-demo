import React, { useState } from "react";

export type CtxType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  /** 加1 */
  add: () => void;
};

// 创建context，注意Ctx的类型
export const Ctx = React.createContext({} as CtxType);

export const Store = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  return (
    <Ctx.Provider value={{ count, setCount, add }}>{children}</Ctx.Provider>
  );
};
