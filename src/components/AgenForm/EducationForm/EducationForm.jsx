import { Button, Input, Stack, Typography } from '@mui/material';
import { formStyle, inputStyle, inputDateStyle, titleStyle } from '../AgenFormStyles';
import { SelectStrata } from './SelectStrata';
import { useState } from 'react';
import { Add, DeleteForever } from '@mui/icons-material';
import { ModalDeleteForm } from '../ModalDeleteForm/ModalDeleteForm';
import { dateToStringNumberMonth } from '../../../utils/DateUtils';

export const EducationForm = ({ data, setData }) => {
    const [deleteId, setDeleteId] = useState(null);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const handleChange = (e, changedIndex) => {
        setData({
            ...data,
            educations: data.educations.map((education, index)=>{
                if(index == changedIndex)
                {
                    return {
                        ...education,
                        [e.target.name]: e.target.value
                    }
                } else
                return education
            })
        })
    }

    const handleAddEducation = () => {
        setData({
            ...data,
            educations: [
                ...data.educations,
                {
                strata: "",
                institution: "",
                major: "",
                gpa: "",
                startDate: dateToStringNumberMonth(new Date()),
                endDate: dateToStringNumberMonth(new Date())
              }
            ]
        })
        setTimeout(()=>window.scrollTo(0, document.body.scrollHeight-800),50)
    }

    const handleDelete = (deleteIndex) => {
        setData({
            ...data,
            educations: data.educations.filter((education, index) => {
                return index != deleteIndex
            })
        })
    }

  return (
    <>
    <Button variant={'outlined'} sx={{maxWidth:'200px', mb:'2rem'}} onClick={handleAddEducation}>
        <Add sx={{mr:'8px'}} />
        Add Education
    </Button>
    <ModalDeleteForm modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={deleteId} />
    <Typography component='form' sx={formStyle}>
        {data.educations?.map((education, index)=> {
            return (
                <Stack key={`education-${index+1}`} gap={2}>
                    <Stack gap={2}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                        <Typography variant='h2' sx={titleStyle}>
                        Education {index+1}
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
                        <Typography>Institution</Typography>
                        <Input disableUnderline name={"institution"} value={ education.institution } onChange={(e)=>handleChange(e, index)} id={`institution-input-${index}`} type="text" placeholder="Institution" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Strata</Typography>
                        <SelectStrata data={data} setData={setData} educationIndex={index} />
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Major</Typography>
                        <Input disableUnderline name={"major"} value={ education.major } onChange={(e)=>handleChange(e, index)} id={`major-input-${index}`} type="text" placeholder="Major" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>GPA</Typography>
                        <Input disableUnderline name={"gpa"} value={ education.gpa } onChange={(e)=>handleChange(e, index)} id={`gpa-input-${index}`} type="text" placeholder="GPA" sx={inputStyle}/>
                    </Stack>
                    <Stack gap={2}>
                        <Typography>Start Date</Typography>
                        <input name="startDate" id={`startDate-input-${index}`} type="date" style={{...inputDateStyle, width: "250px",outline: 'none'}}
                        value={ dateToStringNumberMonth(new Date(education.startDate)) } 
                        onChange={(e)=>handleChange(e, index)} />
                    </Stack>
                    <Stack gap={2}>
                        <Typography>End Date</Typography>
                        <input name="endDate" id={`endDate-input-${index}`} type="date" style={{...inputDateStyle, width: "250px",outline: 'none'}}
                        value={ dateToStringNumberMonth(new Date(education.endDate)) } 
                        onChange={(e)=>handleChange(e, index)} />
                    </Stack>
                </Stack>
            )
        })}
        {!data.educations || data.educations.length == 0 && 
            <Stack height={"300px"} justifyContent={'center'} alignItems={'center'}>
                <Typography>
                    No Education
                </Typography>
            </Stack>
        }
        
    </Typography>
    </>
)
}
