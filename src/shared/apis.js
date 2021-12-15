import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL:
    "http://13.125.188.103" /*요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록*/,
  // headers: { 'content-type': 'multipart/form-data' }, // content-type이 멀티파트/폼데이터 일 때 이렇게 적어서 사용하자
  //withCredentials: true,//자격요건: 쿠키
});

// 쿠키를 요청에 포함하고 싶으면 다음 2가지 작업을 해주면 됩니다.
// 프론트 : withCredentials : true
// 서버 : Access-Control-Allow-Credentials : true
// 요청시에 withCredentials : true를 해주고, 마찬가지로 서버의 응답헤더에 Access-Control-Allow-Credentials : true를 해주어여 합니다.

// Content-Type : 헤더는 클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지를 알려줍니다.
// Authorization : 헤더는 인증 토큰(JWT든, Bearer 토큰이든)을 서버로 보낼 때 사용하는 헤더입니다. API 요청같은 것을 할 때 토큰이 없으면 거절당하기 때문에 이 때, Authorization을 사용하면 됩니다.
// Authorization: Bearer XXXXXXXXXXXXX
// 보통 Basic이나 Bearer같은 토큰의 종류를 먼저 알리고 그 다음에 실제 토큰 문자를 적어 보냅니다.
//Accept : 클라이언트 자신이 원하는 미디어 타입 및 우선순위를 알린다.
// `headers`는 서버에 전송 될 사용자 정의 헤더 입니다. headers: { 'X-Requested-With': 'XMLHttpRequest' }

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

const apis = {
  //로그인
  login: (userInfo) => instance.post("/api/auth/login", userInfo),

  // 회원가입
  signup: (userInfo) => instance.post("/api/auth/register", userInfo),

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
};
export default apis;
