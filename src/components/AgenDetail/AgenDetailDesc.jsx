import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { AgenDetailWrapperStyle, TitleStyle } from './AgenDetailDescStyles'
import { AgenProfile } from './AgenProfile/AgenProfile'
import { AgenEducation } from './AgenEducation/AgenEducation'
import { AgenWorkExperience } from './AgenWorkExperience/AgenWorkExperience'
import { Attachment } from './Attachment/Attachment'
import { useNavigate, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import useDeleteData from '../../hooks/useDeleteData'

export const AgenDetailDesc = ({ data }) => {
  return (
    <Stack gap={0}>
        <Stack direction={'row'} sx={{width:'100%', justifyContent:"end"}}>
            <Attachment data={data} />
        </Stack>
        <Stack sx={AgenDetailWrapperStyle}>
        <AgenProfile data={data} />
        <AgenEducation data={data} />
        <AgenWorkExperience data={data} />
        </Stack>
    </Stack>
  )
}
