import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth"; //구글 로그인을 하기위한 임포트
import { onAuthStateChanged } from "firebase/auth"; //구글 로그인 상태 여부 파악하는 기능
import { useEffect, useState } from "react";
import Login from "../Login";

function DetailNav() {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  //구글 로그인 상태 저장 스테이트
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user);
        console.log("=== Login Success :", userInfo);
      } else {
        console.log("LogOut Success");
      }
    });
  }, [auth, userInfo]);

  function firebaseLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  }
  function firebaseLogout() {
    getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserInfo(null);
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="nav-buttons">
      <Link to={"/아파트_관심목록"}>지도</Link>
      <Link to={"/아파트_관심목록"}>분양</Link>
      <Link to={"/아파트_관심목록"}>관심목록</Link>
      <Link to={"/아파트_관심목록"}>방 내놓기</Link>
      <Login />
    </div>
  );
}
export default DetailNav;
