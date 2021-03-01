import {
  ContainerStyled,
  DivStyled,
  DivTitleStyled,
  TitleStyled,
  TitleNameStyled,
  TitleHouseSyled,
  DivStudentsStyled,
  DivTitleStyledSubTitle,
  NameStyled,
  HouseStyled,
  DivText,
  DivTextModal,
} from "./styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { studentsThunksApi } from "../../store/modules/studentsApi/thunks";
import ModalStyled from "../Modal";

const Score = () => {
  const dispatch = useDispatch();
  const { studentsReduces } = useSelector((state) => state);

  useEffect(() => {
    dispatch(studentsThunksApi());
  }, []);

  return (
    <ContainerStyled>
      <DivStyled>
        <DivTitleStyled>
          <TitleStyled>Alunos</TitleStyled>
        </DivTitleStyled>
        <DivTitleStyledSubTitle>
          <DivText>
            <TitleNameStyled>Nome</TitleNameStyled>
          </DivText>
          <DivText>
            <TitleHouseSyled>Casa</TitleHouseSyled>
          </DivText>
        </DivTitleStyledSubTitle>
        {studentsReduces.map((ele, index) => (
          <DivStudentsStyled key={index}>
            <DivText>
              <NameStyled>{ele.name}</NameStyled>
            </DivText>
            <DivTextModal key={index}>
              <HouseStyled>{ele.house}</HouseStyled>
              <ModalStyled ele={ele} index={index} />
            </DivTextModal>
          </DivStudentsStyled>
        ))}
      </DivStyled>
    </ContainerStyled>
  );
};

export default Score;
