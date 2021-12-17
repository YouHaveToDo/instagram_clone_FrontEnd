import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import apis from "../../shared/apis";
import moment from "moment";
import { history } from "../configureStore";

// import { actionCreators as imageActions } from "./image";

// ---- actions type ----
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DEPETE_POST";
const DETAIL_GET_POST = "DETAIL_GET_POST";
const MAIN_TO_DETAIL = "MAIN_TO_DETAIL";
const DELETE_COMMENT = "DELETE_COMMENT";

// ---- action creators ----
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (contents, formData) => ({
  contents,
  formData,
}));
const getPost = createAction(GET_POST, (posts, likes) => ({
  posts,
  likes,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({
  post_id,
}));
const detailGetPost = createAction(DETAIL_GET_POST, (post_info) => ({
  post_info,
}));
export const mainToDetail = createAction(MAIN_TO_DETAIL, (reload) => ({
  reload,
}));
// 댓글 정보가 posts랑 같이 넘어오기 때문에 comment.js가 아니라 post.js에서 작성
const deleteComment = createAction(DELETE_COMMENT, (post_id, comment_id) => ({
  post_id,
  comment_id,
}));

// ---- initialState ----
const initalState = {
  posts: [],
  // posts: [
  //   {
  //     _id: "61bbb9f9412e4a25ec272863",
  //     userId: "61bbb956412e4a25ec272853",
  //     nickname: "suin",
  //     content: "testetsttestetsttestetsttestetsttestetst",
  //     upload: [
  //       {
  //         path: "img/미들웨어1639692793592.jpg",
  //         mimetype: "image/jpeg",
  //       },
  //     ],
  //     comments: [
  //       {
  //         testcomments: "test",
  //       },
  //     ],
  //     createdAt: 1639691983658,
  //     __v: 0,
  //     updatedAt: "2021-12-16T22:14:49.080Z",
  //     likes: 1,
  //   },
  //   {
  //     _id: "61bc11d4412e4a25ec272880",
  //     userId: "61bc1041412e4a25ec27287b",
  //     nickname: "suin2",
  //     content:
  //       "우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안우오ㅓㅏ아ㅓ안",
  //     upload: [
  //       {
  //         path: "img/KakaoTalk_Photo_2021-12-15-01-12-071639715284986.jpeg",
  //         mimetype: "image/jpeg",
  //       },
  //     ],
  //     comments: [],
  //     createdAt: 1639691983658,
  //     __v: 0,
  //     likes: 0,
  //   },
  // ],
  // likes: [false, false],
  likes: [],
  post: {},
  reloadState: false,
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
        url: "http://api/posts",
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
      console.log(response.data);

      const posts = response.data.posts;
      const likes = response.data.likes;
      console.log(posts, likes);

      dispatch(getPost(posts, likes));
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

const deleteCommentDB = (post_id, comment_id) => {
  return async (dispatch, getstate, { history }) => {
    try {
      console.log("start deleteComment");
      const reponse = await apis.deleteComment(post_id, comment_id);
      const comment_info = reponse.data;
      console.log(comment_info);

      dispatch(deleteComment(post_id, comment_id));
    } catch (err) {
      console.log(err);
    }
  };
};
//---- reducer ----
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = action.payload.posts;
        draft.likes = action.payload.likes;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = state.posts.filter((l, idx) => {
          return parseInt(action.payload.post_id) !== idx;
        });
      }),
    [DETAIL_GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post_info.posts;
        draft.lisks = action.payload.post_info.likes;
      }),

    [MAIN_TO_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.reloadState = action.payload.reload;
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.posts[action.payload.post_id].comments = state.posts[
          action.payload.post_id
        ].comments.filter((l, idx) => {
          return parseInt(action.payload.comment_id) !== idx;
        });
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
  mainToDetail,
  addPost,
  deleteCommentDB,
};
export { actionCreators };
