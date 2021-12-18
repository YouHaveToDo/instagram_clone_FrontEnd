import React from "react";
import styled from "styled-components";
import { Grid, Input, Image } from "../elements/Index";
import logo from "../images/icons/logo.png";
import icon01 from "../images/icons/icon_01.png";
import icon02 from "../images/icons/icon_02.png";
import icon03 from "../images/icons/icon_03.png";
import icon04 from "../images/icons/icon_04.png";
import icon05 from "../images/icons/icon_05.png";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as postActions } from "../redux/module/post";
import Modal from "react-modal";

// overflow-y: hidden;
// overflow-y: scroll;
//

const Header = (props) => {
  // const [overflow, setOverflow] = React.useState(false);

  // React.useEffect(() => {
  //   // if (overflow) {
  //   document.body.classList.add("overflowScroll");
  //   // }
  //   return () => {
  //     document.body.classList.remove("overflowScroll");
  //   };
  // }, []);
  const dispatch = useDispatch();
  // const [reload, setReload] = React.useState(false);

  const mainToDetail = () => {
    // setReload(!reload);
    // console.log(reload);
    // dispatch(postActions.mainToDetail(reload));
    history.push(`/main/create/select`);
  };

  return (
    <Nav>
      <Grid width="935px">
        <Grid is_flex>
          <Grid is_flex>
            <img src={logo} alt="logo" />
          </Grid>
          <Input></Input>
          <Grid flex justify="end">
            <Icon src={icon01}></Icon>
            <Icon src={icon02}></Icon>
            <Icon src={icon03} onClick={mainToDetail}></Icon>
            <Icon src={icon04}></Icon>
            <Icon src={icon05} style={{ position: "relative" }}></Icon>
            <Image shape="circle" size="24" paddingLeft="20px"></Image>
          </Grid>
        </Grid>
      </Grid>
    </Nav>
  );
};

const Nav = styled.div`
  width: 100vw;
  height: 59px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 10;
  position: fixed;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

export default Header;
