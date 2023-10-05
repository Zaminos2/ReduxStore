export const nameValidation = {required:{value:true,message:'please fill the Name input'},pattern:{value:/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,message:'Invalid User Name'}}
export const emailValidation ={required:{value:true,message:'please fill the email input'},pattern:{value:/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/gm,message:'Invalid Email'}}