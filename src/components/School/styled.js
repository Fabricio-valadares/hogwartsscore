import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`;
export const DivSchoolStyled = styled.div`
  text-align: center;
  background-color: #e5edf2;
  margin: -46px 10px 0 10px;
  height: 500px;
  padding: 20px;

  @media (max-width: 960px) {
    width: 313px;
  }

  @media (max-width: 600px) {
    margin: 26px 10px 0 10px;
  }
`;
export const TextStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 33px;
  line-height: 53px;
  color: #5777a8;
`;
export const ImageStyled = styled.img`
  width: 173px;
`;
export const ScoreStyled = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 82px;
  color: #5777a8;
`;
