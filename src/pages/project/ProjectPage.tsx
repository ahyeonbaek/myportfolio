import style from "../../components/navbar.module.css";
const ProjectPage = () => {
  return (
    <div>
      <div className={style.contents_title}>
        <h1 className={style.h1}>project_</h1>
        <p>작업했던 프로젝트들</p>
      </div>
      <div className={style.contents_project_main}>
        <div className={style.project_card}>
          <div className={style.project_img_box}>
            <a
              href="https://github.com/ahyeonbaek/Graduation-Work"
              target="_blank"
            >
              <img
                src="/img/graduation.png"
                alt="GobookGobook 자세히 보기 이미지"
              />
            </a>
          </div>
          <div className={style.contents_project_introduce}>
            <h2>GobookGobook</h2>
            <p>무인서점 시스템입니다.</p>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.project_img_box}>
            <a
              href="https://github.com/ahyeonbaek/eoffice-front"
              target="_blank"
            >
              <img src="/img/eoffice.png" alt="eoffice 자세히 보기 이미지" />
            </a>
          </div>
          <div className={style.contents_project_introduce}>
            <h2>E-office</h2>
            <p>사내 회의실 등록, 예약, 회의록 작성 프로그램입니다.</p>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.project_img_box}>
            <a
              href="https://github.com/ahyeonbaek/fanspick-user-front"
              target="_blank"
            >
              <img src="/img/fanspick.png" alt="fanspick 자세히 보기 이미지" />
            </a>
          </div>
          <div className={style.contents_project_introduce}>
            <h2>FansPick</h2>
            <p>굿즈판매 웹사이트 입니다.</p>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.project_img_box}>
            <a
              href="https://github.com/ahyeonbaek/petple_front"
              target="_blank"
            >
              <img src="/img/petple.png" alt="petple 자세히 보기 이미지" />
            </a>
          </div>
          <div className={style.contents_project_introduce}>
            <h2>Petple</h2>
            <p>반려인들을 위한 커뮤니티 사이트입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
