import { LayerOne } from "./LayerOne";
import { Store } from "./store";

export const Page = () => {
  return (
    <Store>
      <LayerOne />
    </Store>
  );
};
