import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AgenDetailDesc } from '../../components/AgenDetail/AgenDetailDesc'

export const AgenDetail = () => {
  return (
    <Stack gap='24px'>
        <Typography variant='h2' sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '0em',
          color: 'text.gray2',            
        }}>
          Agen Detail
        </Typography>
        <AgenDetailDesc />
    </Stack>
  )
}
