import { NavLink } from "react-router-dom";

export const Header = ({title, subtitle}) => {
  return (
    <div className="header">
      <NavLink to="/"><span>Home</span></NavLink>
      <NavLink to="/jokes"><span>Jokes</span></NavLink>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </div>
  )
}

