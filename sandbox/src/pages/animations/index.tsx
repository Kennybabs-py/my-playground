import UnderlineTabAnimation from "./underline-tab";
import WrappedTabAnimation from "./wrapped-tab";

export default function Animations() {
  return (
    <div className="w-full h-[100vh] mt-30 flex flex-col items-center justify-center gap-[2rem]">
      <WrappedTabAnimation />

      <UnderlineTabAnimation />
    </div>
  );
}
