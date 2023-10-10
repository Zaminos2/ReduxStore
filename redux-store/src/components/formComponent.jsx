import { FormWrap, Global, MyForm } from "./formComponent.styled";
import { useForm } from "react-hook-form";
import { emailValidation, nameValidation } from "../utils";
import { useNavigate } from "react-router-dom";
import { useFeachUserQuery } from "../store/slices/api";
import { useState } from "react";



function FormComponent() {
  const navigate = useNavigate();
  const [userDataFeach,setUserDataFeach] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {isError,isLoading,data} = useFeachUserQuery(userDataFeach);
  console.log(data)
  const onSubmit = async(userData) => {
     setUserDataFeach(userData)
  };

  return (
    <>
      <Global />
      <FormWrap>
        <MyForm onSubmit={handleSubmit(onSubmit)}>
          <h1 className="Title">User Login</h1>
          {isLoading&&<h4>Loading</h4>}
          {isError&&<p className="error">No suchUser</p>}
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
