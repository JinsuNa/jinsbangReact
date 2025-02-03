import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth"; //구글 로그인을 하기위한 임포트
import { onAuthStateChanged } from "firebase/auth"; //구글 로그인 상태 여부 파악하는 기능
import { useEffect, useState } from "react";

function Login() {
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
    <div className="auth-buttons">
      {userInfo !== null ? (
        <p className="userName">{userInfo.displayName}님 환영합니다.</p>
      ) : null}
      {userInfo === null ? (
        <a href="#" className="auth-button" onClick={firebaseLogin}>
          로그인
        </a>
      ) : (
        <a href="#" className="auth-button" onClick={firebaseLogout}>
          로그아웃
        </a>
      )}
    </div>
  );
}
export default Login;
