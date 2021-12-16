import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styled from "styled-components";
import { Button, Grid, Image, Text, Input } from "../elements/Index";

const PostModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <ModalBox>
        <button onClick={() => setModalIsOpen(true)}></button>
        <MoreHorizIcon />
      </ModalBox>

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            zIndex: "11",
          },
          content: {
            width: "400px",
            height: "291px",
            position: "absolute",
            top: "50%",
            left: "50%",
            // right: "40px",
            transform: "translate(-50%,-50%)",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            // overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "0px",
            zIndex: "11",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Button
          size="14px"
          color="#ed4956"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="신고"
        ></Button>
        <Button
          size="14px"
          color="#ed4956"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="팔로우 취소"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="게시물로 이동"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="공유대상..."
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="퍼가기"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="취소"
          _onClick={() => setModalIsOpen(false)}
        ></Button>
      </Modal>
      
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            width: "400px",
            height: "291px",
            position: "absolute",
            top: "50%",
            left: "50%",
            // right: "40px",
            transform: "translate(-50%,-50%)",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            // overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "0px",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <Button
          size="14px"
          color="#ed4956"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="삭제"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="게시물로 이동"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="공유 대상..."
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="링크복사"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="퍼가기"
        ></Button>
        <Button
          size="14px"
          color="#262626"
          width="100%"
          height="48px"
          background="none"
          border="none"
          borderBottom="1px solid #ddd"
          text="취소"
          _onClick={() => setModalIsOpen(false)}
        ></Button>
      </Modal>
    </div>
  );
};
const ModalBox = styled.div`
  position: relative;

  & button {
    position: absolute;
    width: 20px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    /* z-index: 1; */
  }
  & MoreHorizIcon {
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }
`;
const ButtonList = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-bottom: 1px solid #ddd;
  background-color: none;
  text-align: center;
  line-height: 40px;
`;
export default PostModal;
