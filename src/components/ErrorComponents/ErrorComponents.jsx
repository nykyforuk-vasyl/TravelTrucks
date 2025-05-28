import s from "./error.module.css";

export default function ErrorComponents({ text }) {
  return (
    <div className={s.сontainer}>
      <div className={`${s.mask} xs:text-xs`}> {text}</div>
    </div>
  );
}
