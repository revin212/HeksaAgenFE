import { Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AgenDetailDesc } from '../../components/AgenDetail/AgenDetailDesc'
import { Link, useParams } from 'react-router-dom'
import { DeleteForever, Edit } from '@mui/icons-material'
import useDeleteData from '../../hooks/useDeleteData'
import { ModalDeleteAgen } from '../../components/AgenList/ModalDeleteAgen/ModalDeleteAgen'
import useGetData from '../../hooks/useGetData'

export const AgenDetail = () => {
  const {agenId} = useParams();
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const {getData, isLoading: getLoading, data, setData, error: getError, setError: setGetError } = useGetData();
  const {deleteData, isLoading: deleteLoading, msg: deleteMsg, setMsg: setDeleteMsg, error: deleteError, setError: setDeleteError } = useDeleteData();

  useEffect(()=>{
    getData(`https://localhost:44366/api/Agen/GetAgenById?Id=${agenId}`, "getAgen");
  },[])

  const handleDelete = ()=>{
    let deleteAttachments = null

      if(data.attachments?.length > 0){
        deleteAttachments = {
          attachmentFileNames: data.attachments.map(attachment=>attachment.fileName),
          deleteIndex: Array(data.attachments.length).fill(true)
        }
      }

    deleteData(
      `https://localhost:44366/api/Agen/DeleteAgen?Id=${agenId}`,
      "deleteAgenDetail",
      null,
      null,
      agenId,
      "https://localhost:44366/api/Agen/DeleteAttachments",
      deleteAttachments
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
        {data &&
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
        }
        </Stack>
        {data &&
        <>
        <ModalDeleteAgen modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={agenId} />
        <AgenDetailDesc data={data} />
        </>
          }
    </Stack>
  )
}
