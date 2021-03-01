import { HeaderStyled, DivStyled, LogoStyled, TextStyled } from "./styled";

const Header = () => {
  return (
    <HeaderStyled>
      <DivStyled>
        <LogoStyled src={"./assets/logo.svg"} />
        <TextStyled>Hogwarts Score Manager</TextStyled>
      </DivStyled>
    </HeaderStyled>
  );
};

export default Header;
