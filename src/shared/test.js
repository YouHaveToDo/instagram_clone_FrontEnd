// import { memo, useCallback, useEffect, useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import Item from "./Item";
// import Loader from "./Loader";

// const GlobalStyle = createGlobalStyle`
//   *, *::before, *::after {
//     box-sizing: border-box;
//     padding: 0px;
//     margin: 0px;
//   }

//   body {
//     background-color: #f2f5f7;
//   }
// `;

// const AppWrap = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   align-items: center;

//   .Target-Element {
//     width: 100vw;
//     height: 140px;
//     display: flex;
//     justify-content: center;
//     text-align: center;
//     align-items: center;
//   }
// `;

// const App = () => {

//   const [target, setTarget] = useState(null); // 요소의 관찰을 위해 필요
//   const [isLoaded, setIsLoaded] = useState(false); 
//   const [itemLists, setItemLists] = useState([1]); // 기본 아이템 1지정  // 데이터를 받아와서 저장

//   //itemLists 변경될때마 실행
//   useEffect(() => {
//     console.log(itemLists);
//   }, [itemLists]);

//   //아이템 리스트 변경구간
//   const getMoreItem = async () => {
//     //로딩 스패너 실행  
//     setIsLoaded(true);

//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     //기본 아이템 갯수 
//     let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     //concat Items 불러올 아이템 추가 후 
//     setItemLists((itemLists) => itemLists.concat(Items));
//     //로딩 스패너 종료
//     setIsLoaded(false);
//   };

//   //Target 이  options.threshold 로 정의한 Percent(%) 만큼 화면에 노출 혹은 제외 되면,
//   // entries 배열 에 추가하고,
//   // onIntersect Function 을 호출한다.
//   // entry : 인스턴스 배열
//   const onIntersect = async ([entry], observer) => {
//     //전달 받은 entries 배열을 확인하면서, isIntersecting 으로 노출 여부를 확인한다.
//     //isIntersecting : 관찰 대상이 루트 요소와 교차 상태로 들어가거나(true) 교차 상태에서 나가는지(false) 여부를 나타내는 값(Boolean)입니다.
//     if (entry.isIntersecting && !isLoaded) {
//       // 더이상 Target 을 구독할 필요가 없다면, IntersectionObserver 에서 unobserve 로 제거
//       observer.unobserve(entry.target);
//       console.log('화면에서 노출됨'); 
//       await getMoreItem();
//       observer.observe(entry.target);
//     }
//   };
//     /* 옵저버 등록 */
//   useEffect(() => {
//     let observer;
//     if (target) {
//       // Intersection Observer 객체를 생성 / onIntersect Function 과 threshold 전달
//       observer = new IntersectionObserver(onIntersect, {   // 관찰자 초기화
//         threshold: 0.4,
//         // 0.0부터 1.0 사이의 숫자 혹은 이 숫자들로 이루어진 배열로, 타겟 엘리먼트에 대한 교차 영역 비율을 의미합니다. 0.0의 경우 타겟 엘리먼트가 교차영역에 진입했을 시점에 observer를 실행하는 것을 의미
//       });
//       // observe 로 구독할 Target Element 를 추가한다.
//       observer.observe(target); // 관찰할 대상(요소) 등록
//     }
//     return () => observer && observer.disconnect();
//   }, [target]);

//   return (
//     <>
//       <GlobalStyle />

//       {/*  itemLists 만큼 돌리기*/}
//       <AppWrap>
//         {itemLists.map((v, i) => {
//           return <Item number={i + 1} key={i} />;
//         })}
//         <div ref={setTarget} className="Target-Element">
//           {isLoaded && <Loader />}
//         </div>
//       </AppWrap>
//     </>
//   );
// };

// export default memo(App);
