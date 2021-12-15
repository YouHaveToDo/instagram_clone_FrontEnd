// 아이디 체크
// 중복확인
// 영소문, 숫자 혼합 3~12자
export const emailCheck = (userEmail) => {
  let userIdRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  return userIdRegex.test(userEmail);
};

// 닉네임 체크
// 중복 확인
// 길이: 최소 3글자, 10자 제한, 문자 숫자만 가능.
export const nicknameCheck = (userNick) => {
  let userNickRegex = /^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,}$/;

  // let userNickRegex = /^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,20}\$/;

  return userNickRegex.test(userNick);
};

// *비밀번호
// 길이: 4~12자 제한
// 영대소문숫자특수문자 혼합
export const passwordCheck = (userPwd) => {
  let userPwdRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
  // let userPwdRegex = /^(?=.[a-zA-Z])(?=.[0-9]).{8,20}$/;

  return userPwdRegex.test(userPwd);
};
