import { useRef, useState, useEffect } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import account from "../../assets/account.svg";
import style from "./Header.module.css";
import logo from "../../assets/logo.svg";
import lock from "../../assets/lock.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let fileName = "Untitled Document";
  const navigate = useNavigate();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);

  const handleOpenProfile = () => {
    setOpenProfileMenu(!openProfileMenu);
  };

  const handleUser = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("avatar");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  // Save document to database

  const handleSaveDocument = () => {
    const data = {};
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setOpenProfileMenu(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className={style.header} ref={profileMenuRef}>
      <div className={style.left}>
        <img src={logo} alt="Not found!" className={style.logo} />
        <div>
          <span className={style.title}>{fileName}</span>
          <ul className={style.menu}>
            <li onClick={() => window.open("/", "_blank")}>New</li>
            <li onClick={handleSaveDocument}>Save</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className={style.right}>
        <ButtonComponent className={style.shareButton}>
          <img src={lock} alt="" className={style.lock} />
          Share
        </ButtonComponent>
        <img
          src={
            localStorage.getItem("avatar")
              ? window.localStorage.getItem("avatar").toString()
              : account
          }
          alt="Not found!"
          className={style.accountImage}
          onClick={handleOpenProfile}
        />
        {openProfileMenu && (
          <div className={style.profileMenu}>
            <ul>
              <li onClick={() => navigate("/user")}>Profile</li>
              <li
                onClick={() => {
                  handleUser();
                }}
              >
                {localStorage.getItem("token") ? "Logout" : "Login"}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
