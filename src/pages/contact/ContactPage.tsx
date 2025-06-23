import { useRefContext } from "../../context/ref";
import style from "../../css/page.module.css";

const ContactPage = () => {
  const { contactRef } = useRefContext();

  return (
    <div ref={contactRef} className={style.contents_wrap}>
      <div className={style.contents_title}>
        <h1 className={style.h1}>contact_</h1>
        <p>contact me here ☎️</p>
      </div>
      <div className={style.item_box}>
        <div className={style.contact_item}>
          <p>E-mail</p>
          <p>4641090@naver.com</p>
        </div>
        <div className={style.contact_item}>
          <p>Blog</p>
          <p>https://velog.io/@ahyeon2</p>
        </div>
        <div className={style.contact_item}>
          <p>Git</p>
          <p>https://github.com/ahyeonbaek</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
