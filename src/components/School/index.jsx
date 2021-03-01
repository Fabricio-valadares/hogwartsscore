import {
  ContainerStyled,
  DivSchoolStyled,
  TextStyled,
  ImageStyled,
  ScoreStyled,
} from "./styled";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const School = () => {
  const [palceHouse, setPalceHouse] = useState([]);

  const {
    stytherinReduces,
    ravenclowReduces,
    hunffepuffReduces,
    gryffindorReduces,
  } = useSelector((state) => state);

  useEffect(() => {
    const value = [
      {
        house: "Slytherin",
        score: stytherinReduces,
        image: "./assets/img1.svg",
      },
      {
        house: "Ravenclow",
        score: ravenclowReduces,
        image: "./assets/img2.svg",
      },
      {
        house: "Gryffindor",
        score: gryffindorReduces,
        image: "./assets/img3.svg",
      },
      {
        house: "Hufflepuff",
        score: hunffepuffReduces,
        image: "./assets/img5.svg",
      },
    ];

    const orderValues = value.sort((a, b) => a.score - b.score).reverse();

    setPalceHouse(orderValues);
  }, [
    stytherinReduces,
    ravenclowReduces,
    hunffepuffReduces,
    gryffindorReduces,
  ]);

  return (
    <ContainerStyled>
      {palceHouse.map((ele, index) => (
        <DivSchoolStyled key={index}>
          <TextStyled>{ele.house}</TextStyled>
          <ImageStyled src={ele.image}></ImageStyled>
          <ScoreStyled>{ele.score}</ScoreStyled>
        </DivSchoolStyled>
      ))}
    </ContainerStyled>
  );
};

export default School;
