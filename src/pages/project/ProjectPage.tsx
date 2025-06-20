import style from "../../components/navbar.module.css";
const ProjectPage = () => {
  return (
    <div>
      <div className={style.contents_title}>
        <h1 className={style.h1}>project_</h1>
        <p>team & personal Works 📄</p>
      </div>
      <div className={style.contents_project_main}>
        <div className={style.project_card}>
          <div className={style.contents_project_introduce}>
            <div>
              <img src="/img/book.png" alt="책 이미지" />
              <a
                href="https://github.com/ahyeonbaek/Graduation-Work"
                target="_blank"
              >
                GobookGobook
              </a>
            </div>
            <p>무인서점 시스템입니다.</p>
            <div>
              <p>what i did ?</p>
              <p>웹페이지 디자인 & html, css, js를 이용해 사이트 제작</p>
            </div>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.contents_project_introduce}>
            <div>
              <a
                href="https://github.com/ahyeonbaek/eoffice-front"
                target="_blank"
              >
                E-office
              </a>
              <p>사내 회의실 등록, 예약, 회의록 작성 프로그램입니다.</p>
            </div>
            <div>
              <p>what i did ?</p>
              <p>
                React Typescript사용, 회의실 등록, 회의실 수정/삭제, 회의실 예약
                회의실 목록 프론트 구현, 이미지 업로드, 사이드바 공통컴포넌트
                제작{" "}
              </p>
            </div>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.contents_project_introduce}>
            <div>
              <a
                href="https://github.com/ahyeonbaek/fanspick-user-front"
                target="_blank"
              >
                FansPick
              </a>
              <p>굿즈판매 웹사이트 입니다.</p>
            </div>
            <div>
              <p>what I did?</p>
              <p>
                React Typescript사용, 마이페이지 주문내역 장바구니, 즐겨찾기
                조회 프론트,벡 구현, 벡엔드 에러 미들웨어 작성
              </p>
            </div>
          </div>
        </div>
        <div className={style.project_card}>
          <div className={style.contents_project_introduce}>
            <div>
              <a
                href="https://github.com/ahyeonbaek/petple_front"
                target="_blank"
              >
                Petple
              </a>
              <p>반려인들을 위한 커뮤니티 사이트입니다.</p>
            </div>
            <div>
              <p>what I did?</p>
              <p>
                oaut2를 이용한 로그인,로그아웃 기능, 유저,반려동물 프로필 조회
                수정, 펫네임랜덤룰렛, 다른 유저의 프로필 조회, zustand를 이용한
                상태관리 프,벡 구현
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
