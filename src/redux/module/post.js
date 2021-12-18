import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import apis from "../../shared/apis";
import moment from "moment";
import { history } from "../configureStore";

// ---- actions type ----
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";
const DELETE_POST = "DEPETE_POST";
const DETAIL_GET_POST = "DETAIL_GET_POST";
const MAIN_TO_DETAIL = "MAIN_TO_DETAIL";
const DELETE_COMMENT = "DELETE_COMMENT";
const LIKE = "LIKE";

// ---- action creators ----
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const addPost = createAction(ADD_POST, (content) => ({
  content,
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
const like = createAction(LIKE, (like) => ({
  like,
}));

// ---- initialState ----
const initalState = {
  posts: [],
  likes: [],
  post: {
    likes: null,
    result: {},
  },
  reloadState: false,
  test: false,
  like: false,
};

//-- addPostDB (post 추가하기) --
export const addPostDB =
  (content, file) =>
  async (dispatch, getState, { history }) => {
    //FormData 객체 생성

    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("file", file);


      const body = {
        content,
        formData,
      };

      const accessToken = document.cookie.split("=")[1];

      await axios({
        method: "post",
        url: "http://13.209.4.79/api/posts",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: ` ${accessToken}`,
        },
      })
        .then((res) => {
          dispatch(getPostDB());
          history.replace("/main");
        })
        .catch((err) => {
          window.alert("게시물 업로드 실패");
        });
    } catch (err) {
      console.log("게시물 요청 문제 발생", err);
    }
  };

//  -- getPost (메인페이지 전체 게시글 불러오기) --
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      const response = await apis.getPost();

      const posts = response.data.posts;
      const likes = response.data.likes;

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
      const response = await apis.deletePost(post_id);

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
      const response = await apis.detailGetPost(post_id);


      const post_info = response.data;


      dispatch(detailGetPost(post_info));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (post_id, comment_id) => {
  return async (dispatch, getstate, { history }) => {
    try {
      const reponse = await apis.deleteComment(post_id, comment_id);
      const comment_info = reponse.data;

      dispatch(deleteComment(post_id, comment_id));
    } catch (err) {
      console.log(err);
    }
  };
};
//게시물 좋아요
const likePostDB = (post_id) => {
  return async (dispatch, getstate, { history }) => {
    try {
      const reponse = await apis.likePost(post_id);

    } catch (err) {
      console.error("Error response:");
    }
  };
};

//---- reducer ----
export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.test = true;
      }),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = action.payload.posts;
        draft.likes = action.payload.likes;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.posts = state.posts.filter((l, idx) => {
          return action.payload.post_id !== l._id;
        });
      }),
    [DETAIL_GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post_info;
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
    [LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.like = action.payload.like;
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
  likePostDB,
  like,
};
export { actionCreators };
