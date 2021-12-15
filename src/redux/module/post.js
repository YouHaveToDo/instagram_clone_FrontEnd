import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import moment from "moment";

// import { actionCreators as imageActions } from "./image";

// ---- actions type ----
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";
const LOADING = "LOADING";

// ---- action creators ----
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));

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
  paging: { start: null, next: null, size: 4 },
  is_loading: false,
};
// ---- inistalPost(게시물 정보) ----
//
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
  addPost,
};
export { actionCreators };
