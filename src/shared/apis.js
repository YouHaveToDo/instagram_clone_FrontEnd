import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL:
    "http://3.36.74.204" /*요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록*/,
  // headers: { 'content-type': 'multipart/form-data' }, // content-type이 멀티파트/폼데이터 일 때 이렇게 적어서 사용하자
  //withCredentials: true,//자격요건: 쿠키
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  // 기본 content-type이 json이라 뒤에 따로 명시 안해도 되지만, 불안해서 명시함
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["authorization"] = getToken("login")
    ? `${getToken("login")}`
    : "";
  config.headers.Accept = "application/json";
  return config;
});
// 토큰을 헤더에 담아드릴지 자동으로 토큰으로 넘겨드릴지 백엔드분들에게 여쭤보기

export const apis = {
  //로그인
  login: (userInfo) => instance.post("/api/auth/login", userInfo),

  // 회원가입
  signup: (userInfo) => instance.post("/api/auth/register", userInfo),

  //게시물
  getPost: () => instance.get("/api/posts"), //게시글 조회

  addPost: (article_info) => instance.post(`/api/article`, article_info), //게시글 작성

  updatePost: (article_id, article_infos) =>
    instance.put(`/api/article/${article_id}`, article_infos), //게시글 수정

  detailGetPost: (post_id) => instance.get(`api/posts/${post_id}`), //게시글 상세페이지 조회
  deletePost: (post_id) => instance.delete(`/api/posts/${post_id}`), //게시글 삭제

  //댓글
  getComment: (article_id) => instance.get(`/api/${article_id}/comment`), // 댓글 조회
  addComment: (article_id, comment_info) =>
    instance.post(`/api/comment/${article_id}`, comment_info), // 댓글 작성
  deleteComment: (comment_id) => instance.delete(`/api/comment/${comment_id}`), // 댓글 삭제

  //라이트
  greenLight: (article_id) => instance.post(`/api/article/${article_id}/green`), // 그린라이트
  redLight: (article_id) => instance.post(`/api/article/${article_id}/red`), // 레드라이트
  //-------- 새로작업함 (수인)-------
  //업로드
  // upload: (data) => instance.post(`api/image`, { file: data }),
};

export default apis;
