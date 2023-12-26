import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { AgenDetailDesc } from '../../components/AgenDetail/AgenDetailDesc'
import { Link, useParams } from 'react-router-dom'
import { DeleteForever, Edit } from '@mui/icons-material'
import useDeleteData from '../../hooks/useDeleteData'
import { ModalDeleteAgen } from '../../components/AgenList/ModalDeleteAgen/ModalDeleteAgen'

export const AgenDetail = () => {
  const {agenId} = useParams();
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const {deleteData, isLoading: deleteLoading, msg: deleteMsg, setMsg: setDeleteMsg, error: deleteError, setError: setDeleteError } = useDeleteData();

  const handleDelete = ()=>{
    deleteData(
      `https://localhost:44366/api/Agen/DeleteAgen?Id=${agenId}`,
      "deleteAgenDetail"
    )
  }

  return (
    <Stack gap='24px'>
        <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant='h2' sx={{
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '30px',
          letterSpacing: '0em',
          color: 'text.gray2',            
        }}>
          Agen Detail
        </Typography>
        <Stack direction={'row'} gap={2}>
            <Link to={`/edit-agen/${agenId}`}>
            <button style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}}>
                <Edit color='secondary' />
            </button>
            </Link>
            <button style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}}
            onClick={()=>{
              setModalDeleteOpen(true)}
            }
            >
                <DeleteForever color='warning' />
            </button>
        </Stack>
        </Stack>
        <ModalDeleteAgen modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={agenId} />
        <AgenDetailDesc />
    </Stack>
  )
}
