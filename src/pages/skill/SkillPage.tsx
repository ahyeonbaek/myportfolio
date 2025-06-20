import style from "../../components/navbar.module.css";

const SkillPage = () => {
  return (
    <div>
      <div className={style.contents_title}>
        <h1 className={style.h1}>skill_</h1>
        <p>learned and written 👩🏻‍💻</p>
      </div>
      <div className={style.contents_skill_main}>
        <div className={style.skill_card}>
          <p>Front</p>
          <div className={style.skill_img_wrap}>
            <div>
              <img src="/img/React.png" alt="TypeScript 로고 이미지" />
            </div>
            <div>
              <img src="/img/TypeScript.png" alt="TypeScript 로고 이미지" />
            </div>
            <div>
              <img src="/img/JavaScript.png" alt="JavaScript 로고 이미지" />
            </div>
            <div>
              <img src="/img/CSS3.png" alt="CSS3 로고 이미지" />
            </div>
            <div>
              <img src="/img/Node.js.png" alt="Node.js 로고 이미지" />
            </div>
            <div>
              <img src="/img/MongoDB.png" alt="MongoDB 로고 이미지" />
            </div>
          </div>
        </div>
        <div className={style.skill_card}>
          <p>Library</p>
          <div className={style.skill_img_wrap}>
            <div>
              <img src="/img/zustand.svg" alt="typescript 로고 이미지" />
            </div>
            <div>
              <img src="/img/tanstack.png" alt="tanstack 로고 이미지" />
            </div>
            <div>
              <img
                src="/img/react-hook-form.png"
                alt="react-hook-form 로고 이미지"
              />
            </div>
          </div>
        </div>
        <div className={style.skill_card}>
          <p>Etc</p>
          <div className={style.skill_img_wrap}>
            <div>
              <img src="/img/GitHub.png" alt="GitHub 로고 이미지" />
            </div>
            <div>
              <img src="/img/GitLab.png" alt="GitLab 로고 이미지" />
            </div>
            <div>
              <img src="/img/Figma.png" alt="Figma 로고 이미지" />
            </div>
            <div>
              <img src="/img/Vite.js.png" alt="Vite 로고 이미지" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
