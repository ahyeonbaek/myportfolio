import style from "./navbar.module.css";

import { useNavigate } from "react-router-dom";

import { useRefContext } from "../context/ref";

const NavBar = () => {
  const navigate = useNavigate();

  const { aboutRef, projectRef, skillRef, contactRef, scrollToContent } =
    useRefContext();

  return (
    <div>
      <div className={style.container}>
        <div className={style.navbar}>
          <div className={style.logo}>
            <img
              src="/img/logo.png"
              alt="포트폴리오 로고버튼"
              onClick={() => navigate("/")}
            />
          </div>
          <ul>
            <li>
              <a onClick={() => scrollToContent(aboutRef)}>about</a>
            </li>
            <li>
              <a onClick={() => scrollToContent(projectRef)}>project</a>
            </li>
            <li>
              <a onClick={() => scrollToContent(skillRef)}>skill</a>
            </li>
            <li>
              <a onClick={() => scrollToContent(contactRef)}>contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
