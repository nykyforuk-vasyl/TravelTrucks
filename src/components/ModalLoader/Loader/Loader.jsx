import s from "./loader.module.css";

export default function Loader() {
  return (
    <div className={s.сontainer}>
      <div className={s.mask}>Loading...</div>
    </div>
  );
}
