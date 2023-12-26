import { Button, Input, Stack, Typography } from '@mui/material';
import { formStyle, inputStyle, inputDateStyle, titleStyle, textAreaStyle } from '../AgenFormStyles';
import { useState } from 'react';
import { Add, DeleteForever } from '@mui/icons-material';
import { ModalDeleteForm } from '../ModalDeleteForm/ModalDeleteForm';
import { dateToStringNumberMonth } from '../../../utils/DateUtils';

export const WorkForm = ({ data, setData }) => {
    const [deleteId, setDeleteId] = useState(null);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const handleChange = (e, changedIndex) => {
        setData({
            ...data,
            workExperiences : data.workExperiences.map((experience, index)=>{
                if(index == changedIndex)
                {
                    return {
                        ...experience,
                        [e.target.name]: e.target.value
                    }
                } else
                return experience
            })
        })
    }

    const handleAddExperience = () => {
        setData({
            ...data,
            workExperiences: [
                ...data.workExperiences,
                {
                company : "",
                field : "",
                position : "",
                startDate : dateToStringNumberMonth(new Date()),
                endDate : dateToStringNumberMonth(new Date()),
                jobDesc : ""
              }
            ]
        })
        setTimeout(()=>window.scrollTo(0, document.body.scrollHeight-930),50)
    }

    const handleDelete = (deleteIndex) => {
        setData({
            ...data,
            workExperiences: data.workExperiences.filter((experience, index) => {
                return index != deleteIndex
            })
        })
    }

  return (
    <>
    <Button variant={'outlined'} sx={{maxWidth:'250px', mb:'2rem'}} onClick={handleAddExperience}>
        <Add sx={{mr:'8px'}} />
        Add Work Experience
    </Button>
    <ModalDeleteForm modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={deleteId} />
    <Typography component='form' sx={formStyle}>
        {data.workExperiences?.map((experience, index)=> {
            return (
                <Stack key={`experience-${index+1}`} gap={2}>
                    <Stack gap={2}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                        <Typography variant='h2' sx={titleStyle}>
                        Work Experience {index+1}
                        </Typography>
                        <button type="button" style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}}
                        onClick={()=>{
                            setDeleteId(index)
                            setModalDeleteOpen(true)}}
                        >
                            <DeleteForever color='warning' />
                        </button>
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Company</Typography>
                        <Input disableUnderline name={"company"} value={ experience.company } onChange={(e)=>handleChange(e, index)} id={`company-input-${index}`} type="text" placeholder="Company" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Field</Typography>
                        <Input disableUnderline name={"field"} value={ experience.field } onChange={(e)=>handleChange(e, index)} id={`field-input-${index}`} type="text" placeholder="Field" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Position</Typography>
                        <Input disableUnderline name={"position"} value={ experience.position } onChange={(e)=>handleChange(e, index)} id={`position-input-${index}`} type="text" placeholder="Position" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Job Description</Typography>
                        <textarea name={"jobDesc"} value={ experience.jobDesc } onChange={(e)=>handleChange(e, index)} id={`jobDesc-input-${index}`} placeholder="Job Description" rows={6} style={textAreaStyle} />
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Start Date</Typography>
                        <input name="startDate" id={`startDateWork-input-${index}`} type="date" style={{...inputDateStyle, width: "250px",outline: 'none'}}
                        value={ experience.startDate } 
                        onChange={(e)=>handleChange(e, index)} />
                    </Stack>
                    <Stack gap={2}>
                        <Typography>End Date</Typography>
                        <input name="endDate" id={`endDateWork-input-${index}`} type="date" style={{...inputDateStyle, width: "250px",outline: 'none'}}
                        value={ experience.endDate } 
                        onChange={(e)=>handleChange(e, index)} />
                    </Stack>
                </Stack>
            )
        })}
        {!data.workExperiences || data.workExperiences.length == 0 && 
            <Stack height={"300px"} justifyContent={'center'} alignItems={'center'}>
                <Typography>
                    No Work Experience
                </Typography>
            </Stack>
        }
        
    </Typography>
    </>
  )
}
