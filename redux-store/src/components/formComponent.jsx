import { FormWrap, Global, MyForm } from "./formComponent.styled";
import { useForm } from "react-hook-form";
import { feachUser } from "../store/slices/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { emailValidation, nameValidation } from "../utils";
import { errorState } from "../store/slices/userDataSlice";
import { useNavigate } from "react-router-dom";
import { selectStatusUser } from "../store/slices/userDataSlice";


function FormComponent() {
  const navigate = useNavigate();
  const errorstate = useSelector(errorState);
    const statusUser = useSelector(selectStatusUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispach = useDispatch();

  const onSubmit = (data) => {
       dispach(feachUser({ username: data.username, email: data.email }))
      .then(()=>{navigate('/menu');}) 
  };

  return (
    <>
      <Global />
      <FormWrap>
        <MyForm onSubmit={handleSubmit(onSubmit)}>
          <h1 className="Title">User Login</h1>
          {statusUser === 'pending'&&<h4>Loading</h4>}
          {errorstate && <p className="error">{errorstate}</p>}
          <label htmlFor="username">UserName</label>
          {errors.username && <p>{errors.username.message}</p>}
          <input {...register("username", nameValidation)} />
          <label htmlFor="email">Email</label>
          {errors.email && <p>{errors.email.message}</p>}
          <input {...register("email", emailValidation)} />
          <input type="submit" />
        </MyForm>
      </FormWrap>
    </>
  );
}
export default FormComponent;
