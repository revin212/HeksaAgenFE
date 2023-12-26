import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { DescContactStyle, DescStyle, DescTitleStyle, ListTitleStyle, TitleStyle, agen, ListWrapperStyle } from '../AgenDetailDescStyles'
import { dateToString } from '../../../utils/DateUtils'

export const AgenEducation = () => {
  return (
    <Stack gap='24px' sx={{flex:'40%'}}>
        <Typography variant='h2' sx={TitleStyle}>
          Educations
        </Typography>
        <Box sx={ListWrapperStyle}>
        { agen.educations.map((education, index) => {
            return (
                <Box key={`education-${education.id}`} sx={{mx:"8px", mb:"1rem", flex:"45%"}} >
                    <Typography variant='h3' sx={ListTitleStyle}>
                        Education {index+1}
                    </Typography>
                    <Stack gap={'1rem'} mx={2}>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Institution
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {education?.institution}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Strata
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                {education?.strata}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                Major
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {education?.major}
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                            <Typography variant='body1' sx={DescTitleStyle}>
                                GPA
                            </Typography>
                            <Stack direction={'row'} gap='12px'>
                                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                                <Typography variant='body1' sx={DescStyle} ml="4px" >
                                    {education?.gpa}
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
                                    {dateToString(new Date(education?.startDate))}
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
                                {dateToString(new Date(education?.endDate))}
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
