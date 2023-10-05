import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  ProfileWrap,
  CloseButton,
  AccordionWrap,
} from "../components/userProfileStyled";
import { useNavigate } from "react-router-dom";

function UsetProfilePage() {
    
    const navigate = useNavigate();
    const getUser = JSON.parse( localStorage.getItem('user'));
  


  const [userData, setUserdata] = useState(getUser);
  const [expanded, setExpanded] = useState(null);

  function handleExpanded (title){
    setExpanded((prevExpanded) => (prevExpanded === title ? null : title));
  };
  function handleInputChange(title,e){
    const newValue = e.target.value;
    setUserdata((prevData)=>({
        ...prevData,
        [title]:newValue
    }))
  }
  const handleEnter = (e,title)=>{
    if(e.key==="Enter"){
        localStorage.setItem("user",JSON.stringify(userData))
    }
  }

  return (
    <ProfileWrap>
      <CloseButton onClick={()=>{navigate('/')}}>x</CloseButton>
      <h1>UserProfile</h1>
      <AccordionWrap>
        {Object.entries(userData).map(([title, value]) => {
          if (title !== "id" && title !== "name"&&title!=="username") {
            return (
              <Accordion
                key={title}
                expanded={expanded === title}
              >
                <AccordionSummary onClick={()=>handleExpanded(title)} expandIcon={<KeyboardArrowDownIcon />}>
                  <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TextField key={title} label={title} value={value} onChange={(e)=>handleInputChange(title,e)}  onKeyDown={(e)=>{handleEnter(e,title)}}/>
                </AccordionDetails>
              </Accordion>
            );
          }
          return null;
        })}
      </AccordionWrap>
    </ProfileWrap>
  );
}

export default UsetProfilePage;
