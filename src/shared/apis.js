import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL: "",
});

instance.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json; charset=utf-8";
  config.headers["X-Requested-With"] = "XMLHttpRequest";
  config.headers["authorization"] = getToken() ? `${getToken()}` : "";
  config.headers.Accept = "application/json";
  return config;
});

export const apis = {
  //로그인
  login: (data) =>
    instance.post("/user/signin", {
      username: data.username,
      password: data.password,
    }),

  // 회원가입
  signup: (data) =>
    instance.post("/user/signup", {
      username: data.username,
      nickname: data.nickname,
      password: data.password,
      password2: data.password2,
    }),

  //게시물
  getPost: () => instance.get("/home"), //게시글 조회

  addPost: (article_info) => instance.post(`/api/article`, article_info), //게시글 작성

  updatePost: (article_id, article_infos) =>
    instance.put(`/api/article/${article_id}`, article_infos), //게시글 수정

  getPostDetail: (article_id) => instance.get(`api/article/${article_id}`), //게시글 상세페이지 조회
  deletePost: (article_id) => instance.delete(`/api/article/${article_id}`), //게시글 삭제

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
