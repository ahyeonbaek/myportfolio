import style from "../../css/page.module.css";
import { useRefContext } from "../../context/ref";
import AboutPage from "../about/AboutPages";
import ProjectPage from "../project/ProjectPage";
import SkillPage from "../skill/SkillPage";
import ContactPage from "../contact/ContactPage";

const MainPage = () => {
  const { aboutRef, scrollToContent } = useRefContext();
  return (
    <div>
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
      <div>
        <AboutPage />
      </div>
      <div>
        <ProjectPage />
      </div>
      <div>
        <SkillPage />
      </div>
      <div>
        <ContactPage />
      </div>
    </div>
  );
};

export default MainPage;
