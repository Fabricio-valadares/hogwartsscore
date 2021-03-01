import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DivStyled = styled.div`
  width: 88%;
  margin: 30px 0;
  background: #e5edf2;
  padding: 45px;

  @media (max-width: 600px) {
    padding: 18px;
  }
`;
export const DivTitleStyled = styled.div`
  height: 71px;
`;

export const DivText = styled.div`
  width: 50%;
`;
export const TitleStyled = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  margin: 0;
  line-height: 68px;
  letter-spacing: -0.02em;

  color: #5777a8;
`;
export const TitleHouseSyled = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #5777a8;
`;

export const DivTextModal = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TitleNameStyled = styled.h3`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #5777a8;
`;
export const DivStudentsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #5777a8;
  height: 85px;
`;

export const DivTitleStyledSubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  height: 85px;
  border-bottom: 1px solid #5777a8;
`;
export const NameStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #5777a8;

  @media (max-width: 600px) {
    font-size: 23px;
    line-height: 30px;
  }
`;
export const HouseStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 27px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #5777a8;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
