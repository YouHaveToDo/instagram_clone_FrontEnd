import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import { apis } from "../../shared/apis";

import axios from "axios";

// actions
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, (userInfo) => ({ userInfo }));

// initialState
const initialState = {
  user: null,
  username: "",
  is_login: false,
  userInfo: null,
};

// middleware actions
//-- 로그인 --
const loginDB = (email, pw) => {
  return function (dispatch, getState, { history }) {
    const userInfo = {
      email,
      pw,
    };
    apis
      .login(userInfo)
      .then((response) => {
        console.log(response);
        //console.log(response.headers);
        console.log(response.headers.authorization);

        const token = response.headers.authorization;
        
        console.log(typeof token);
        setToken("login", token);
        console.log("토큰저장완료!");
        window.alert("로그인 성공 🔥");

        console.log(userInfo.email);
        dispatch(setUser(userInfo));

        history.push(`/main`);
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디 / 비밀번호를 확인해주세요! 🥸");
      });
  };
};

// -- 회원가입 --
const signupDB = (email, nickname, pw) => {
  return function (dispatch, getState, { history }) {
    const userInfo = {
      email,
      nickname,
      pw,
    };
    console.log(userInfo);
    // 일시적으로 확인하기 위해 history 추가 api 연결되면 아래줄 지워야함.
    // history.push("/");
    apis
      .signup(userInfo)
      .then((response) => {
        console.log(response);
        window.alert("회원가입 성공 🔥");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 유저확인
const checkUserDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .checkUser()
      .then((response) => {
        const user = response.data;
        localStorage.setItem("MY_LOCAL", `${user}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log("확인");
        console.log(action.payload.userInfo);
        draft.userInfo = action.payload.userInfo;
        draft.is_login = true;
      }),
  },
  initialState
);

// action creator export
export const userActions = {
  loginDB,
  signupDB,
  checkUserDB,
};
