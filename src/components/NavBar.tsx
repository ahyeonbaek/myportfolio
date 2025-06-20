import { Modal } from "ahyeon-react-ui-kit";
import style from "./navbar.module.css";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutPage from "../pages/about/AboutPages";
import ProjectPage from "../pages/project/ProjectPage";
import SkillPage from "../pages/skill/SkillPage";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);

  const handleOpenModal = () => {
    setIsOpen(true);
    console.log("모달열림");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const scrollToContent = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      {/* <button className={style.trigger} onClick={handleOpenModal}>
        <img src="/img/menu.png" alt="메뉴버튼" />
      </button>

        <Modal
          onCloseModal={handleCloseModal}
          onOpenModal={handleOpenModal}
          open={isOpen}
          className={style.modal}
        >
          <Modal.Backdrop className={style.backdrop} />
          <Modal.Trigger className={style.trigger}>
            <img src="/img/menu.png" alt="메뉴버튼" />
          </Modal.Trigger>
          <Modal.Content className={style.modal_content}>
            <div>
              <p>모달열림</p>
              <Modal.Close>
                <img src="/img/close.png" alt="닫기버튼" />
              </Modal.Close>
              <ul>
                <li>
                  <a onClick={() => scrollToContent(aboutRef)}>about</a>
                </li>
                <li>
                  <a onClick={() => scrollToContent(aboutRef)}>about</a>
                </li>
              </ul>
            </div>
          </Modal.Content>
        </Modal> */}

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
        <div className={style.main_wrap}>
          <div>
            <p>Frontend Developer</p>
            <h1>
              {"welcome to the".split("").map((char, i) => (
                <span
                  key={`line1-${i}`}
                  className={style.char}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <br />
              {"ahyeon's portfolio".split("").map((char, i) => (
                <span
                  key={`line2-${i}`}
                  className={style.char}
                  style={{ animationDelay: `${(i + 15) * 0.05}s` }} // 두 번째 줄은 약간 delay offset 줌
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <a onClick={() => scrollToContent(aboutRef)}>🔽</a>
        </div>
        <div ref={aboutRef} className={style.contents_wrap}>
          <AboutPage />
        </div>
        <div ref={projectRef} className={style.contents_wrap}>
          <ProjectPage />
        </div>
        <div ref={skillRef} className={style.contents_wrap}>
          <SkillPage />
        </div>
        <div ref={contactRef} className={style.contents_wrap}>
          <div className={style.contents_title}>
            <h1 className={style.h1}>contact_</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
