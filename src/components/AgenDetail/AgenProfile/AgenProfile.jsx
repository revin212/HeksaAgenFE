import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { DescContactStyle, DescStyle, DescTitleStyle, ListWrapperStyle, TitleStyle, agen } from '../AgenDetailDescStyles'
import { dateToString } from '../../../utils/DateUtils'

export const AgenProfile = () => {
  return (
    <Stack gap='16px' sx={{flex:'40%'}}>
        <Typography variant='h2' sx={TitleStyle}>
          Profile
        </Typography>
        <Box sx={ListWrapperStyle}>
        <Stack gap={'1rem'} mx={2} flex={'40%'}>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Name
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescStyle} ml="4px" >
                        {agen?.name}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Gender
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescStyle} ml="4px" >
                        {agen?.gender}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Birth Place
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescStyle} ml="4px" >
                        {agen?.birthPlace}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Birth Date
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescStyle} ml="4px" >
                        {dateToString(new Date(agen?.birthDate))}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        <Stack gap={'1rem'} mx={2} flex={'40%'}>
        <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
            <Typography variant='body1' sx={DescTitleStyle}>
                Address
            </Typography>
            <Stack direction={'row'} gap='12px'>
                <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                <Typography variant='body1' sx={DescStyle} ml="4px" >
                    {agen?.address}
                </Typography>
            </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Email
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescContactStyle} ml="4px" >
                        {agen?.email}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    Phone
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescContactStyle} ml="4px" >
                        {agen?.phone}
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={{xs:'column', sm:'row'}} gap={{xs:'0px', sm:'8px'}}>
                <Typography variant='body1' sx={DescTitleStyle}>
                    ID Card
                </Typography>
                <Stack direction={'row'} gap='12px'>
                    <Typography variant='body1' sx={DescStyle} display={{xs:'none', sm:'block'}}>:</Typography>
                    <Typography variant='body1' sx={DescStyle} ml="4px" >
                        {agen?.idCard}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        </Box>
    </Stack>
  )
}
