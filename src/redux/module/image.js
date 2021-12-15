import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/apis";

const SET_PREVIEW = "SET_PREVIEW";

const setPreview = createAction(SET_PREVIEW, (preview, formData) => ({
  preview,
  formData,
}));

const initialState = {
  uploading: false,
  preview: null,
  uploadUrl: "",
  formData: "",
};

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
        draft.formData = action.payload.formData;
      }),
  },
  initialState
);
const actionCreators = {
  setPreview,
};

export { actionCreators };
