import s from "./loader.module.css";

export default function Loader({ text }) {
  return (
    <div className={s.сontainer}>
      <div className={`${s.mask} xs:text-xs`}> {text}</div>
    </div>
  );
}
