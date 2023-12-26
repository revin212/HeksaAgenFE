import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React from 'react'
import { buttonStyle, modalContentStyle, titleStyle } from './ModalDeleteAgenStyles';

export const ModalDeleteAgen = ({ modalDeleteOpen, setModalDeleteOpen, deleteLoading, handleDelete, deleteId }) => {
  return (
    <Modal 
        open={modalDeleteOpen}
        onClose={()=>setModalDeleteOpen(false)}
        aria-labelledby="modal-payment-method"
        aria-describedby="modal-payment-method-list"
    >
        <Box sx={modalContentStyle}>
            <Stack gap='16px'>
                <Typography id="modal-payment-method" variant="h6" component="h2" sx={titleStyle}>
                    Hapus Agen?
                </Typography>
            </Stack>
            <Stack direction='row' gap='16px' justifyContent='center'>
                <Button variant='outlined' sx={buttonStyle} onClick={()=>setModalDeleteOpen(false)}>
                    Batal
                </Button>
                <Button disabled={deleteLoading} variant='contained' sx={buttonStyle} onClick={()=>{
                    handleDelete(deleteId)
                    setModalDeleteOpen(false)
                    }}>
                    Hapus
                </Button>
            </Stack>
        </Box>
    </Modal>
  )
}
