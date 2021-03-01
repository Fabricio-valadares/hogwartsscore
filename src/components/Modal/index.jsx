import {
  ImageModal,
  ImageStudents,
  DivButtonModalStyled,
  DivModalStyled,
  ContentModalStyled,
  LogoModalHouse,
  NameStudents,
  DivLogoInSchool,
  Text,
  Button2Styled,
  Button1Styled,
  TextGanho,
  DivGanho,
  ButtonEnd,
  DivPerder,
  TextPerder,
  DivStudentsModalStyled,
} from "./styled";
import { useState } from "react";
import { Modal, TextField } from "@material-ui/core";
import { useStyles } from "./styled";

import { useDispatch } from "react-redux";
import {
  slytherinThunksAdd,
  slytherinThunksSub,
} from "../../store/modules/scoreSlytherin/thunks";
import {
  ravenclowThunksAdd,
  ravenclowThunksSub,
} from "../../store/modules/scoreRavenclow/thunks";

import {
  hunffepuffThunksAdd,
  hunffepuffThunksSub,
} from "../../store/modules/scoreHunffepuff/thunks";

import {
  gryffindorThunksAdd,
  gryffindorThunksSub,
} from "../../store/modules/scoreGryffindor/thunks";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ModalStyled = ({ ele, index }) => {
  const [viewForm, setViewForm] = useState(true);
  const [viewAdd, setViewAdd] = useState(false);
  const [viewSub, setViewSub] = useState(false);
  const [nameSubmitForm, setNameSubmitForm] = useState("");

  const [ganhoInPerder, setGanhoInPerder] = useState(0);

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    number: yup
      .number()
      .typeError("Apenas numeros")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataFormAdd = (data, nameForm) => {
    setGanhoInPerder(data.number);
    reset();

    if (ele.house === "Slytherin") {
      if (nameForm.target.name === "ganho") {
        dispatch(slytherinThunksAdd(data.number));
        setViewAdd(true);
        setViewForm(false);
      }
      if (nameForm.target.name === "perder") {
        dispatch(slytherinThunksSub(data.number));
        setViewSub(true);
        setViewForm(false);
      }
    }

    if (ele.house === "Ravenclaw") {
      if (nameForm.target.name === "ganho") {
        dispatch(ravenclowThunksAdd(data.number));
        setViewAdd(true);
        setViewForm(false);
      }
      if (nameForm.target.name === "perder") {
        dispatch(ravenclowThunksSub(data.number));
        setViewSub(true);
        setViewForm(false);
      }
    }

    if (ele.house === "Hufflepuff") {
      if (nameForm.target.name === "ganho") {
        dispatch(hunffepuffThunksAdd(data.number));
        setViewAdd(true);
        setViewForm(false);
      }
      if (nameForm.target.name === "perder") {
        dispatch(hunffepuffThunksSub(data.number));
        setViewSub(true);
        setViewForm(false);
      }
    }

    if (ele.house === "Gryffindor") {
      if (nameForm.target.name === "ganho") {
        dispatch(gryffindorThunksAdd(data.number));
        setViewAdd(true);
        setViewForm(false);
      }
      if (nameForm.target.name === "perder") {
        dispatch(gryffindorThunksSub(data.number));
        setViewSub(true);
        setViewForm(false);
      }
    }
  };

  const viewFormInputOne = () => {
    setViewAdd(false);
    setViewForm(true);
  };

  const viewFormInputTwo = () => {
    setViewSub(false);
    setViewForm(true);
  };
  return (
    <div key={index}>
      <ImageModal src={"./assets/img4.svg"} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <DivModalStyled>
            <ImageStudents
              style={{
                backgroundImage: `url(${ele.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></ImageStudents>
          </DivModalStyled>
          <ContentModalStyled>
            <DivLogoInSchool>
              <LogoModalHouse src={"./assets/img3.svg"}></LogoModalHouse>
              <NameStudents>{ele.house}</NameStudents>
            </DivLogoInSchool>
            <DivStudentsModalStyled>
              <Text>{ele.name}</Text>
            </DivStudentsModalStyled>
            {viewForm && (
              <form name={nameSubmitForm} onSubmit={handleSubmit(dataFormAdd)}>
                <TextField
                  name="number"
                  inputRef={register}
                  error={!!errors.number}
                  helperText={errors.number?.message}
                  className={classes.input}
                  variant="outlined"
                />
                <DivButtonModalStyled>
                  <Button1Styled
                    type="submit"
                    variant="contained"
                    onClick={() => setNameSubmitForm("ganho")}
                    className={classes.button1}
                  >
                    Ganho
                  </Button1Styled>
                  <Button2Styled
                    type="submit"
                    onClick={() => setNameSubmitForm("perder")}
                    variant="contained"
                    className={classes.button2}
                  >
                    Perder
                  </Button2Styled>
                </DivButtonModalStyled>
              </form>
            )}
            {viewAdd && (
              <DivGanho>
                <TextGanho>{`+ ${ganhoInPerder}`}</TextGanho>
                <ButtonEnd onClick={viewFormInputOne}>Confirmar</ButtonEnd>
              </DivGanho>
            )}
            {viewSub && (
              <DivPerder>
                <TextPerder>{`- ${ganhoInPerder}`}</TextPerder>
                <ButtonEnd onClick={viewFormInputTwo}>Confirmar</ButtonEnd>
              </DivPerder>
            )}
          </ContentModalStyled>
        </div>
      </Modal>
    </div>
  );
};

export default ModalStyled;
