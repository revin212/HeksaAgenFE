import { Box, Button, Stack, Typography } from '@mui/material';
import { formStyle, titleStyle,  } from '../AgenFormStyles';
import usePostData from '../../../hooks/usePostData';
import useGetData from '../../../hooks/useGetData';
import { useState } from 'react';
import { Add, DeleteForever } from '@mui/icons-material';
import { ModalDeleteForm } from '../ModalDeleteForm/ModalDeleteForm';


export const AttachmentForm = ({ data, setData, attachmentFileNames, deleteIndexArray, setDeleteIndexArray, uploadFiles, setUploadFiles }) => {
    const [deleteId, setDeleteId] = useState(null);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

    const {getData, isLoading: getLoading, data: fetchedData, setData: setFetchedData, error: getError, setError: setGetError } = useGetData();

    const handleUploadImage = (e, changeIndex) => {
        if(attachmentFileNames.includes(data.attachments[changeIndex]?.fileName)){
            setDeleteIndexArray(deleteIndexArray?.map((deleteState, index)=> {
                if(index == changeIndex){
                    return true
                } else return deleteState
            } ))
        }

        setData({
            ...data,
            attachments: data.attachments.map((attachment, index)=>{
                if(index == changeIndex){
                    attachment = {
                        ...attachment,
                        fileName: e.target.files[0].name,
                        filePath: ''
                    }
                    return attachment
                }
                else return attachment
            })
        })

        setUploadFiles(uploadFiles?.map((uploadState, index)=> {
            if(index == changeIndex){
                return e.target.files[0]
            } else return uploadState
        } ))
    }

    const handleAddAttachment = () => {
        setData({
            ...data,
            attachments: [
                ...data.attachments,
                {
                    attachmentType : "",
                    fileType : "",
                    fileName: "",
                    filePath: ""
                }
            ]
        })
        setUploadFiles([
            ...uploadFiles,
            false
        ])
        setTimeout(()=>window.scrollTo(0, document.body.scrollHeight),50)
    }

    const handleDelete = (deleteIndex) => {
        setData({
            ...data,
            attachments: data.attachments.filter((attachment, index) => {
                return index != deleteIndex
            })
        })
        if(attachmentFileNames.includes(data.attachments[deleteIndex]?.fileName)){
            setDeleteIndexArray(deleteIndexArray?.map((deleteState, index)=> {
                if(index == deleteIndex){
                    return true
                } else return deleteState
            } ))
        }
        setUploadFiles(uploadFiles?.filter((file, index) => {
            return index != deleteIndex
        }))
    }

    const handleDownload = (downloadIndex) => {
        if(data.attachments[downloadIndex].fileName){
            getData(
                `https://localhost:44366/api/Agen/DownloadAttachment?fileName=${data.attachments[downloadIndex].fileName}`,
                'downloadAttachment',
                data.attachments[downloadIndex].fileName
            )
        }
    }

  return (
    <>
    <Button variant={'outlined'} sx={{maxWidth:'200px', mb:'2rem'}} onClick={handleAddAttachment}>
        <Add sx={{mr:'8px'}} />
        Add Attachment
    </Button>
    <ModalDeleteForm modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={deleteId} />

    <Typography component='form' sx={formStyle} >
    {data.attachments?.map((attachment, index)=> {
            return (
                <Stack key={`attachment-${index+1}`} gap={2} my={'2rem'}>
                    <Stack gap={2}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                        <Typography variant='h2' sx={titleStyle}>
                        Attachment {index+1}
                        </Typography>
                        <button type="button" style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}} 
                        onClick={()=>{
                            setDeleteId(index)
                            setModalDeleteOpen(true)}}
                        >
                            <DeleteForever color='warning' />
                        </button>
                        </Stack>
                    </Stack>
                    <Stack gap={2}>
                        <input
                        type="file"
                        name={`attachment-${index}`}
                        onChange={(e)=>handleUploadImage(e, index)}
                        />
                        <Typography>{ attachment.fileName }</Typography>
                    </Stack>
                    {attachment.filePath != "" ? 
                    <Stack>
                        <Button variant='contained' type="button"
                        onClick={()=>handleDownload(index)}
                        sx={{maxWidth:'120px', px:2, py:1}}
                        >Download</Button>
                    </Stack> 
                    : null}
                </Stack>
            )
        })}
        {!data.attachments || data.attachments.length == 0 && 
            <Stack height={"300px"} justifyContent={'center'} alignItems={'center'}>
                <Typography>
                    No Attachment
                </Typography>
            </Stack>
        }
        
    </Typography>
    </>
  )
}
