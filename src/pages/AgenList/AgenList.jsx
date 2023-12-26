import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AgenListPagination } from '../../components/AgenList/AgenListPagination'

export const AgenList = () => {
  return (
    <Stack gap='32px'>
        <Typography variant='h2' sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '0em',
          color: 'text.gray2',            
        }}>
          Agen List
        </Typography>
        <AgenListPagination />
    </Stack>
  )
}
