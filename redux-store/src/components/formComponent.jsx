import { FormWrap, Global, MyForm } from "./formComponent.styled";
import { useForm } from "react-hook-form";
import { emailValidation, nameValidation } from "../utils";
import { useNavigate } from "react-router-dom";
import { useFeachUserQuery } from "../store/slices/api";



function FormComponent() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {isError,isLoading,data,refetch} = useFeachUserQuery();
  const onSubmit = async(userData) => {
      const{username,email}= userData;
      if(username&&email){
       await refetch(username,email)
      console.log(data[0])
      navigate('/menu')
      }
      
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
