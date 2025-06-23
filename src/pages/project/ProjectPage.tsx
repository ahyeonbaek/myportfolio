import style from "../../css/page.module.css";
import { useRefContext } from "../../context/ref";
const ProjectPage = () => {
  const { projectRef } = useRefContext();

  return (
    <div ref={projectRef} className={style.contents_wrap}>
      <div className={style.contents_title}>
        <h1 className={style.h1}>project_</h1>
        <p>team & personal Works 📄</p>
      </div>
      <div className={style.contents_project_main}>
        <a
          className={style.project_card}
          href="https://github.com/ahyeonbaek/Graduation-Work"
          target="_blank"
        >
          <div className={style.project_introduce}>
            <div className={style.project_introduce_title}>
              <h2>GobookGobook</h2>
              <p>📌 무인서점 시스템입니다.</p>
            </div>

            <div className={style.project_tasks}>
              <h2>what i did ?</h2>
              <p>- 웹페이지 디자인 & html, css, js를 이용해 사이트 제작</p>
            </div>
          </div>
        </a>
        <a
          className={style.project_card}
          href="https://github.com/ahyeonbaek/eoffice-front"
          target="_blank"
        >
          <div className={style.project_introduce}>
            <div className={style.project_introduce_title}>
              <h2>E-office</h2>
              <p>
                📌 사내 회의실 등록, 예약, 회의록 작성
                <br /> 프로그램입니다.
              </p>
            </div>
            <div className={style.project_tasks}>
              <h2>what i did ?</h2>
              <p>
                - 회의실 등록, 수정/삭제, 예약 , 예약된 목록 페이지 (프), <br />
                - 이미지 업로드, 사이드바 공통컴포넌트 제작{" "}
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ahyeonbaek/fanspick-user-front"
          target="_blank"
          className={style.project_card}
        >
          <div className={style.project_introduce}>
            <div className={style.project_introduce_title}>
              <h2>FansPick</h2>
              <p>📌 굿즈판매 웹사이트 입니다.</p>
            </div>
            <div className={style.project_tasks}>
              <h2>what i did ?</h2>
              <p>
                - localstorage를 활용한 마이페이지 주문내역 장바구니, 즐겨찾기
                조회 (프,벡) <br />- 벡엔드 에러 middleware 작성
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/ahyeonbaek/petple_front"
          target="_blank"
          className={style.project_card}
        >
          <div className={style.project_introduce}>
            <div className={style.project_introduce_title}>
              <h2>Petple</h2>
              <p>📌 반려인들을 위한 커뮤니티 사이트입니다.</p>
            </div>
            <div className={style.project_tasks}>
              <h2>what i did ?</h2>
              <p>
                - oaut2를 이용한 로그인,로그아웃 기능 (프,벡)
                <br />
                - 유저,반려동물 프로필 조회/수정 (프,벡)
                <br />
                - 다른 유저의 프로필 조회 (프,벡) <br />
                - 반려동물 이름 추천 룰렛 <br />
                - zustand를 이용한 상태관리 <br />
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectPage;
