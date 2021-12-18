import axios from "axios";
import { getToken } from "./token";
const accessToken = document.cookie.split("=")[1];
const instance = axios.create({
  baseURL: "http://13.209.4.79",
  // headers: {
  //   authorization: ` ${accessToken}`,
  // },
  // "http://3.36.74.204" /*요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록*/,
  // headers: { 'content-type': 'multipart/form-data' }, // content-type이 멀티파트/폼데이터 일 때 이렇게 적어서 사용하자
  //withCredentials: true,//자격요건: 쿠키
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  // 기본 content-type이 json이라 뒤에 따로 명시 안해도 되지만, 불안해서 명시함
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["Authorization"] = getToken("login")
    ? `${getToken("login")}`
    : "";
  config.headers.Accept = "application/json";
  return config;
});
// 토큰을 헤더에 담아드릴지 자동으로 토큰으로 넘겨드릴지 백엔드분들에게 여쭤보기

export const apis = {
  //---- 유저  ----
  login: (userInfo) => instance.post("/api/auth/login", userInfo), //로그인
  signup: (userInfo) => instance.post("/api/auth/register", userInfo), //회원가입
  checkUser: () => instance.get(`/api/auth/me`),

  //---- 게시글 ----
  getPost: () => instance.get("/api/posts"), //게시글 조회
  detailGetPost: (post_id) => instance.get(`api/posts/${post_id}`), //상세페이지 조회
  deletePost: (post_id) => instance.post(`/api/posts/${post_id}`), // 게시글 삭제

  //---- 댓글 ----
  getComment: (post_id) => instance.get(`/api/posts/${post_id}/comments`), // 댓글 조회
  addComment: (post_id, comment_info) =>
    instance.post(`/api/posts/${post_id}/comments`, comment_info), // 댓글 작성
  deleteComment: (post_id, comment_id) =>
    instance.post(`/api/posts/${post_id}/comments/${comment_id}/`), // 댓글 삭제

  //---- 좋아요 ----
  likePost: (post_id) => instance.post(`/api/${post_id}/like`),
};

export default apis;
