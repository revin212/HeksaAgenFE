import { Box, Button, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ProfileForm } from '../../components/AgenForm/ProfileForm/ProfileForm'
import { EducationForm } from '../../components/AgenForm/EducationForm/EducationForm'
import { dateToStringNumberMonth } from '../../utils/DateUtils'
import { WorkForm } from '../../components/AgenForm/WorkForm/WorkForm'
import { AttachmentForm } from '../../components/AgenForm/AttachmentForm/AttachmentForm'
import { useParams } from 'react-router-dom'
import usePostData from '../../hooks/usePostData'

const steps = ["Profile", "Educations", "Work Experiences", "Attachments"]

export const AgenForm = ({ variant }) => {
  const {agenId} = useParams()

  const [data, setData] = useState({
    name: '',
    gender: '',
    birthPlace: '',
    birthDate: dateToStringNumberMonth(new Date()),
    address: '',
    email: '',
    phone: '',
    idCard: '',
    educations: [{
      strata: "",
      institution: "",
      major: "",
      gpa: "",
      startDate: dateToStringNumberMonth(new Date()),
      endDate: dateToStringNumberMonth(new Date())
    }],
    workExperiences: [{
      company : "",
      field : "",
      position : "",
      startDate : dateToStringNumberMonth(new Date()),
      endDate : dateToStringNumberMonth(new Date()),
      jobDesc : ""
    }],
    attachments: [{
      attachmentType : "",
      fileType : "",
      fileName: "",
      filePath: ""
    }]
  })
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);

    postData(
      "https://localhost:44366/api/Agen/CreateAgen",
      "createAgen",
      data
    )
}

const {postData, isLoading: postLoading, msg: postMsg, setMsg: setPostMsg, error: postError, setError: setPostError } = usePostData();

  return (
    <Stack gap='32px'>
        <Typography variant='h2' sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '0em',
          color: 'text.gray2',            
        }}>
          {variant} Agen
        </Typography>

        <Box my={4} px={2}>
        <Stepper activeStep={activeStep} sx={{display:'flex', flexWrap:'wrap', gap:2}}>
        {steps.map((label, index) => {
          const stepProps = {completed: activeStep > index ? true : false};
          return (
            
            <Step key={label} {...stepProps} >
              <Button onClick={()=>setActiveStep(index)} sx={{cursor:'pointer', padding:0}} >
              <StepLabel>{label}</StepLabel>
              </Button>
            </Step>
          );
        })}
        </Stepper>
        </Box>

        {activeStep == 0 && <ProfileForm data={data} setData={setData} />}
        {activeStep == 1 && <EducationForm data={data} setData={setData} />}
        {activeStep == 2 && <WorkForm data={data} setData={setData} />}
        {activeStep == 3 && <AttachmentForm data={data} setData={setData} />}
        
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} mt={6}>
        <Button variant={'outlined'} onClick={handleBack} disabled={activeStep === 0} sx={{px:4}} >Back</Button>
        {!(activeStep === steps.length - 1) && 
        <Button variant={'contained'} onClick={handleNext} disabled={activeStep === steps.length - 1} sx={{px:4}} >Next</Button>
        }
        {activeStep === steps.length - 1 && <Button variant={'contained'} onClick={handleSubmit} sx={{px:4}} >Submit</Button>}
        </Stack>
    </Stack>
  )
}
