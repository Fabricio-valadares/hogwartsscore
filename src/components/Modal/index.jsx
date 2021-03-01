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
  const [viewForm, setViewForm] = useState(false);
  const [viewAdd, setViewAdd] = useState(true);
  const [viewSub, setViewSub] = useState(false);
  const [nameSubmitForm, setNameSubmitForm] = useState("");

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
    number: yup.number("Apenas numeros").required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataFormAdd = (data, nameForm) => {
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
            <ImageStudents src={ele.image}></ImageStudents>
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
              <div>
                <h2>Ganho</h2>
                <button onClick={viewFormInputOne}>Confirmar</button>
              </div>
            )}
            {viewSub && (
              <div>
                <h2>Perder</h2>
                <button onClick={viewFormInputTwo}>Confirmar</button>
              </div>
            )}
          </ContentModalStyled>
        </div>
      </Modal>
    </div>
  );
};

export default ModalStyled;
