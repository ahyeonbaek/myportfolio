import style from "./main.module.css";

const MainPage = () => {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src="/img/me.JPG" alt="프로필 사진" />
      </div>
      <div>
        <div>welcome to the ahyeon's world</div>
      </div>
    </div>
  );
};

export default MainPage;
