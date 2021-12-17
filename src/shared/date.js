const dayToString = (number) => String(number).padStart(2, 0);
const flooring = (number) => Math.floor(number);
const gapDateSecond = (gapDate) => flooring(gapDate / 1000);
const gapDateMinute = (gapDate) => flooring(gapDate / 60);
const gapDateHour = (gapDate) => flooring(gapDate / 60);
const gapDateDay = (gapDate) => flooring(gapDate / 24);
const gapDateWeek = (gapDate) => flooring(gapDate / 7);
const gapDateMonth = (gapDate) => flooring(gapDate / 4);
const gapDateYear = (gapDate) => flooring(gapDate / 12);
const getYearMonthDay = (date) => {
  const dateObj = new Date(date);
  const [year, month, day] = [
    dateObj.getFullYear(),
    dateObj.getMonth() + 1,
    dateObj.getDate(),
  ];
  return [year, month, day];
};

// 형식 YYYY년 XX월 ZZ일
export const returnFullDate = (date) => {
  // console.log(date);
  const [year, month, day] = getYearMonthDay(date);
  return `${year}년 ${month}월 ${day}일`;
};

// 형식 ~초 전 or ~일 전
export const returnGapDate = (newDate, date) => {
  console.log(newDate, date);
  const nowDate = new Date(newDate);
  console.log(nowDate);
  const postedDate = new Date(Number(date));
  console.log(postedDate);
  let gapDate = nowDate - postedDate;
  gapDate = gapDateSecond(gapDate);
  console.log(gapDate);
  //초
  if (gapDate < 60) {

    return `${gapDate}초`;

  }
  //분
  gapDate = gapDateMinute(gapDate);
  if (gapDate < 60) {

    return `${gapDate}분`;

  }
  //시간
  gapDate = gapDateHour(gapDate);
  if (gapDate < 24) {

    return `${gapDate}시간`;

  }
  //일
  gapDate = gapDateDay(gapDate);
  if (gapDate < 7) {

    return `${gapDate}일`;

  }
  //주
  gapDate = gapDateWeek(gapDate);
  if (gapDate < 5) {

    return `${gapDate}주`;

  }
  //달
  gapDate = gapDateMonth(gapDate);
  if (gapDate < 12) {

    return `${gapDate}달`;
  }
  //년
  gapDate = gapDateYear(gapDate);
  return `${gapDate}년`;

};
