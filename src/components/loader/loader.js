import { Rings } from "react-loader-spinner";
import { Loading } from "./loader.module";

export default function Spin() {
  return (
    <Loading>
      <Rings
        color="green"
        height={200}
        width={200}
        timeout={2000} //2 secs
      />
    </Loading>
  );
}
