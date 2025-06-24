import style from "../../css/page.module.css";
import { useRefContext } from "../../context/ref";
import useIntersection from "../../hook/useIntersection";

const AboutPage = () => {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.3 });

  const { aboutRef } = useRefContext();

  return (
    <div ref={aboutRef} className={style.contents_wrap}>
      <div className={style.contents_title}>
        <h1 className={style.h1}>about_</h1>
        <p>introduce myself 🪴</p>
      </div>
      <div className={style.contents_about_main}>
        <div className={style.about_profile_main}>
          <div>
            <div className={style.contents_about_emoji_1}>
              <p ref={ref} className={isIntersecting ? "active" : ""}>
                💻
              </p>
            </div>
            <div className={style.contents_about_img}>
              <img
                src={`${import.meta.env.BASE_URL}img/me.JPG`}
                alt="프로필 사진"
              />
            </div>
            <div className={style.contents_about_emoji_2}>
              <p>🖇️</p>
            </div>
          </div>
          <div className={style.about_tag}>
            <p>#노력하는</p>
            <p>#성실한</p>
            <p>#매일 성장하는</p>
            <p>#문제 탐구</p>
            <p>#기초부터</p>
          </div>
        </div>
        <div
          className={`${style.contents_about_introduce} ${
            isIntersecting ? style.active : ""
          }`}
        >
          <p>안녕하세요.</p>
          <div>
            <p>
              1️⃣{" "}
              <span className={style.span_yellow}>
                "사용자의 편리성을 중점으로 한 서비스"
              </span>
              와
            </p>
            <p>
              2️⃣ <span className={style.span_yellow}>"깔끔한 UI/UX" </span>를
              만들기 위해 노력하는
            </p>
            <p> 프론트엔드 개발자 백아현입니다.</p>
          </div>
          <p>
            단순한 html,css 를 활용한 <br />
            웹페이지 디자인, 제작을 시작으로, <br />
            프론트엔드 분야에 흥미를 느끼게 되었습니다. <br />
            주로{" "}
            <span className={style.span_bottom}>
              vite 환경에서 react typescript
            </span>{" "}
            로 <br />
            작업하였고,{" "}
            <span className={style.span_bottom}>
              사용친화적인 react ui컴포넌트를
            </span>{" "}
            <br />
            만들기위해 노력하였습니다. <br />
            또한 엘리스 리액트 트랙2기를 수료하며,
            <br />
            진행했던{" "}
            <span className={style.span_bottom}>
              팀 프로젝트에서 협업하는 방식
            </span>
            과 <br />
            <span className={style.span_bottom}>서버와의 통신 흐름</span>을
            익혔습니다.
          </p>
          <p>
            ✍️ 배울수록 느끼는 것은 배움에는 끝이없다는 것입니다. <br />
            어제보다 더 나은 개발자가 되기위해 노력하겠습니다.
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
