import { Box, Stack } from '@mui/material'
import React from 'react'
import { AgenDetailWrapperStyle, TitleStyle } from './AgenDetailDescStyles'
import { AgenProfile } from './AgenProfile/AgenProfile'
import { AgenEducation } from './AgenEducation/AgenEducation'
import { AgenWorkExperience } from './AgenWorkExperience/AgenWorkExperience'
import { Attachment } from './Attachment/Attachment'

export const AgenDetailDesc = () => {
  return (
    <Stack gap={0}>
        <Stack direction={'row'} sx={{width:'100%', justifyContent:"end"}}>
            <Attachment />
        </Stack>
        <Stack sx={AgenDetailWrapperStyle}>
        <AgenProfile />
        <AgenEducation />
        <AgenWorkExperience />
        </Stack>
    </Stack>
  )
}
