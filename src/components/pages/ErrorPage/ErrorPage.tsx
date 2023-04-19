import { NavLink } from "react-router-dom";
import s from "./ErrorPage.module.css";
type IProps = {};

export const ErrorPage: React.FC<IProps> = ({}) => {
  return (
    <div className={s.wrapper1}>
      <h1>404</h1>
      <div className={s.cloak__wrapper}>
        <div className={s.cloak__container}>
          <div className={s.cloak}></div>
        </div>
      </div>
      <div className={s.info}>
        <h2>We can't find that page</h2>
        <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
        <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
          Home
        </NavLink>
       
      </div>
    </div>
  );
};
