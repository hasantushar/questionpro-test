import MyButton from "../../component/MyButton";
import MyComponentHOC from "./MyComponentHOC";

export default function Home() {
  return (
    <>
      <div className="flex">
          <MyButton label="Clickable Button"></MyButton>
          <MyButton label="Dummy Button"></MyButton>
        </div>
    </>
  );
}
