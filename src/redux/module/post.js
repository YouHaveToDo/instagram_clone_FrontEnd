import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";

// import { actionCreators as imageActions } from "./image";

// ---- actions type ----
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

// ---- action creators ----
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (contents, formData) => ({
  contents,
  formData,
}));

// ---- initialState ----
const initalState = {
  posts: [
    {
      Id: 0,
      nickname: "suin",
      content:
        "안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요",
      uploadUrl: "https://t1.daumcdn.net/cfile/tistory/9918834E5BD95A0A08",
      type: "",
      createAt: "2020-22-22",
      updatedAt: "22",
    },
    {
      Id: 1,
      nickname: "suin2",
      content: "안녕하세요하하하",
      uploadUrl: "https://t1.daumcdn.net/cfile/tistory/9918834E5BD95A0A08",
      type: "",
      createAt: "2020-22-22",
    },
  ],
};

//-- addPostDB (post 추가) --
export const addPostDB =
  (contents, formData) =>
  async (dispatch, getState, { history }) => {
    try {
      const body = {
        content: contents,
        file: formData,
      };
      const accessToken = document.cookie.split("=")[1];

      axios({
        method: "post",
        url: "http://주소/api/posts",
        data: body,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: ` ${accessToken}`,
        },
      })
        .then((res) => {
          console.log(res);
          // dispatch(addPost(res.data));
          history.replace("/main");
        })
        .catch((err) => {
          window.alert("게시물 업로드 실패");
          console.log(err);
        });
    } catch (err) {
      console.error("게시물 요청 문제 발생", err);
    }
  };

//---- reducer ----
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initalState
);

// ---- action creator export ----
const actionCreators = {
  setPost,
  addPostDB,
};
export { actionCreators };
