import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import { apis } from "../../shared/apis";

import axios from "axios";
import { ContactsOutlined } from "@material-ui/icons";

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
  return async function (dispatch, getState, { history }) {
    const userInfo = {
      email,
      pw,
    };
    await apis
      .login(userInfo)
      .then((response) => {
        dispatch(checkUserDB());

        dispatch(checkUserDB());
        const token = response.data.token;
        // dispatch(checkUserDB());

        setToken("login", token);

        window.alert("로그인 성공 🔥");

        dispatch(setUser(userInfo));
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디 / 비밀번호를 확인해주세요! 🥸");
      });
  };
};

// -- 회원가입 --
const signupDB = (email, nickname, pw) => {
  return async function (dispatch, getState, { history }) {
    const userInfo = {
      email,
      nickname,
      pw,
    };

    // 일시적으로 확인하기 위해 history 추가 api 연결되면 아래줄 지워야함.
    // history.push("/");
    await apis
      .signup(userInfo)
      .then((response) => {
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
  return async function (dispatch, getState, { history }) {
    await apis
      .checkUser()
      .then((response) => {
        const user = response.data.nickname;

        localStorage.setItem("MY_LOCAL", `${user}`);
        history.push(`/main`);
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
