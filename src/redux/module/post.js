import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import apis from "../../shared/apis";
import moment from "moment";

// import { actionCreators as imageActions } from "./image";

// ---- actions type ----
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DEPETE_POST";
const DETAIL_GET_POST = "DETAIL_GET_POST";

// ---- action creators ----
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (contents, formData) => ({
  contents,
  formData,
}));
const getPost = createAction(GET_POST, (post_info) => ({
  post_info,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({
  post_id,
}));
const detailGetPost = createAction(DETAIL_GET_POST, (post_info) => ({
  post_info,
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
  post: {},
};

//-- addPostDB (post 추가하기) --
export const addPostDB =
  (contents, formData) =>
  async (dispatch, getState, { history }) => {
    try {
      const body = {
        content: contents,
        file: formData,
      };
      const accessToken = document.cookie.split("=")[1];

      await axios({

        method: "post",
        url: "http:///api/posts",
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

//  -- getPost (메인페이지 전체 게시글 불러오기) --
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("start getPostDB");
      const response = await apis.getPost();
      console.log(response);

      const post_info = response.data;
      console.log(post_info);

      dispatch(getPost(post_info));
    } catch (error) {
      console.log(error);
    }
  };
};

// -- deletePost (메인페이지 게시글 삭제)
const deletePostDB = (post_id) => {
  return async (dispatch, getstate, { history }) => {
    try {
      console.log("start deletePOstDB");
      const response = await apis.deletePost(post_id);
      console.log(response.data);

      dispatch(deletePost(post_id));
    } catch (error) {
      console.log(error);
    }
  };
};

// -- detailGetPost (상세페이지 게시글 조회)
const detailGetPostDB = (post_id) => {
  return async (dispatch, getstate, { history }) => {
    try {
      console.log("start detailGetPostDB");
      const response = await apis.detailGetPost(post_id);
      const post_info = response.data;
      console.log(post_info);

      dispatch(detailGetPost(post_info));
    } catch (error) {
      console.log(error);
    }
  };
};
//---- reducer ----
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = action.payload.post_info;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = state.posts.filter((l, idx) => {
          return parseInt(action.payload.post_id) !== idx;
        });
      }),
    [DETAIL_GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post_info;
      }),
  },
  initalState
);

// ---- action creator export ----
const actionCreators = {
  getPostDB,
  setPost,
  addPostDB,
  deletePostDB,
  detailGetPostDB,
};
export { actionCreators };
