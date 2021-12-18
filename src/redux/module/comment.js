import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";
import { ContactSupportOutlined } from "@material-ui/icons";

// action type
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";
const GET_COMMENT = "GET_COMMENT";

// action creator
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));
// const delComment = createAction(DELETE_COMMENT, (comment_id, mode) => ({
//   comment_id,
//   mode,
// }));
const getComment = createAction(GET_COMMENT, (comment) => ({
  comment,
}));

// middleware

const addCommentDB = (post_id, comment) => {
  return async (dispatch, getState, { history }) => {
    try {
      const comment_info = {
        comment,
      };
      // console.log(JSON.parse(comment));
      const response = await apis.addComment(post_id, comment_info);
      const comments = response.data;

      dispatch(addComment(post_id, comment));
      history.push(`/main/detail/${post_id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (comment_id) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("deleteCommentDB try 시작!");
      const response = await apis.deleteComment(comment_id);
      console.log(response);
      const comments = response.data;
      console.log(comments);
    } catch (error) {
      console.dir(error);
      console.log(error);
    }
  };
};

const getCommentDB = (post_id) => {
  console.log("start getCommentDB");
  return async (dispatch, getState, { history }) => {
    try {
      console.log("겟코멘트 디비");
      const response = await apis.getComment(post_id);
      console.log(response);
      const comment = response.data.comments;
      console.log(comment);

      dispatch(getComment(comment));
    } catch (err) {
      console.log(err);
    }
  };
};

// initial state
const initialState = {
  list: [],

  comments: [],
  comment: [],
};

// reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) => {
      produce(state, (draft) => {
        draft.comments = state.comments.push(action.payload.comment);
      });
    },
    [GET_COMMENT]: (state, action) => {
      produce(state, (draft) => {
        draft.comment = action.payload.comment;
      });
    },
  },
  initialState
);

export const commentActions = {
  addCommentDB,
  deleteCommentDB,
  getCommentDB,
};
