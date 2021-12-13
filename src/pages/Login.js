import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input, Button } from "../elements/index";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();

  const [username, setId] = React.useState("");
  const [password, setPwd] = React.useState("");

  const login = () => {
    

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};


export default Login;
