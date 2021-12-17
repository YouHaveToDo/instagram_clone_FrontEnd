import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";
import { ContactSupportOutlined } from "@material-ui/icons";

// action type
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action creator
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));
// const delComment = createAction(DELETE_COMMENT, (comment_id, mode) => ({
//   comment_id,
//   mode,
// }));

// middleware

const addCommentDB = (post_id, comment) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("addCommentDB try 시작!");
      console.log(post_id, comment);
      const response = await apis.addComment(post_id, comment);
      console.log(response);
      const comments = response.data;
      console.log(comments);

      dispatch(addComment(post_id, comment));
      history.push(`/main/detail/${post_id}`);
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteCommentDB = (comment_id) => {
  console.log("미들웨어");
  return async (dispatch, getState, { history }) => {
    try {
      console.log("deleteCommentDB try 시작!");
      const response = await apis.deleteComment(comment_id);
      console.log(response);
      const comments = response.data;
      console.log(comments);
    } catch (error) {
      console.log(error);
    }
  };
};

// initial state
const initialState = {
  list: [],

  comments: [],
};

// reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) => {
      produce(state, (draft) => {
        draft.comments = state.comments.push(action.payload.comment);
      });
    },
  },
  initialState
);

export const commentActions = {
  addCommentDB,
  deleteCommentDB,
};
