import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import apis from "../../shared/apis";

// actions
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, (username) => ({ username }));

// initialState
const initialState = {
  user: null,
  username: "",
  is_login: false,
};

// middleware actions
const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    const data = {
      username: username,
      password: password,
    };
    apis
      .login(data)
      .then((response) => {
        //console.log(response);
        //console.log(response.headers);
        console.log(response.headers.authorization);

        const token = response.headers.authorization;
        console.log(typeof token);
        setToken(token);
        console.log("토큰저장완료!");
        window.alert("로그인 성공 🔥");

        console.log(data.username);
        dispatch(setUser(data.username));

        history.push(`/main/${data.username}`);
      })
      .catch((err) => {
        console.log(err);
        window.alert("아이디 / 비밀번호를 확인해주세요! 🥸");
        console.dir(err.response.data.errorMessage);
      });
  };
};

const signupDB = (username, nickname, password, password2) => {
  return function (dispatch, getState, { history }) {
    const data = {
      username: username,
      nickname: nickname,
      password: password,
      password2: password2,
    };
    apis
      .signup(data)
      .then((response) => {
        window.alert("회원가입 성공 🔥");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        console.dir(err.response.data.errorMessage);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.username);
        draft.username = action.payload.username;
        draft.is_login = true;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  loginDB,
  signupDB,
};

export { actionCreators };
