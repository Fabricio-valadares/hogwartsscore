import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const ImageModal = styled.img`
  cursor: pointer;
  width: 49px;
`;

export const DivButtonModalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 20px;
`;
export const DivModalStyled = styled.div`
  width: 45%;
`;
export const ContentModalStyled = styled.div`
  width: 55%;
`;
export const LogoModalHouse = styled.img`
  width: 77px;
  margin-right: 27px;
`;
export const NameStudents = styled.div`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 47px;
  letter-spacing: -0.02em;
  color: #3461a4;
`;
export const DivStudentsModalStyled = styled.div``;
export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 84px;
  margin: 8px 0;
  letter-spacing: -0.02em;

  color: #3461a4;
`;
export const DivLogoInSchool = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageStudents = styled.img`
  width: 276px;
  height: 376px;
`;
// MATERIAL UI STYLES

export const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "15%",
    display: "flex",
    left: "20%",
    width: "676px",
    height: "388px",
    background: "#E5EDF2",
    padding: "20px",
    outline: "none",
  },
  input: {
    border: "1px solid #3361a4",
    background: "#fff",
    width: "350px",
    outline: "none",
  },
}));

export const Button1Styled = styled.button`
  width: 166px;
  background-color: #65e1cb;
  box-shadow: none;
  font-size: 1.2rem;
  border-radius: 0;
  color: #fff;
  outline: none;
  border: none;
  height: 43px;
`;

export const Button2Styled = styled.button`
  width: 166px;
  background-color: #f8a388;
  box-shadow: none;
  font-size: 1.2rem;
  border-radius: 0;
  outline: none;
  border: none;
  height: 43px;
  color: #fff;
`;
