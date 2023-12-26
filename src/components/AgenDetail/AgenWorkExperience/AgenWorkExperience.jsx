import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { DescContactStyle, DescStyle, DescTitleStyle, ListTitleStyle, ListWrapperStyle, TitleStyle } from '../AgenDetailDescStyles'
import { dateToString } from '../../../utils/DateUtils'

export const AgenWorkExperience = ({ data }) => {
  return (
    <Stack gap='24px'>
        <Typography variant='h2' sx={TitleStyle}>
          Work Experiences
        </Typography>
        <Box sx={ListWrapperStyle}>
        { data.workExperiences && data?.workExperiences.map((experience, index) => {
            return (
                <Box key={`experience-${experience.id}`} sx={{mx:"8px", mb:"1rem", flex:"45%"}} >
                    <Typography variant='h3' sx={ListTitleStyle}>
                        Work Experience {index+1}
                    </Typography>
                    <Stack gap={'1rem'} mx={2}>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Company
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {experience?.company}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Field
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {experience?.field}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Position
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {experience?.position}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Job Description
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {experience?.jobDesc}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Start Date
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {dateToString(new Date(experience?.startDate))}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                End Date
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescContactStyle} ml="4px" >
                                {dateToString(new Date(experience?.endDate))}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            )
        }) }
        </Box>
    </Stack>
  )
}
