import { Box, Button, Stack, Typography } from '@mui/material';
import { formStyle, titleStyle,  } from '../AgenFormStyles';
import usePostData from '../../../hooks/usePostData';
import useDeleteData from '../../../hooks/useDeleteData';
import useGetData from '../../../hooks/useGetData';
import { useState } from 'react';
import { Add, DeleteForever } from '@mui/icons-material';
import { ModalDeleteForm } from '../ModalDeleteForm/ModalDeleteForm';


export const AttachmentForm = ({ data, setData }) => {
    const [deleteId, setDeleteId] = useState(null);
    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

    const {getData, isLoading: getLoading, data: fetchedData, setData: setFetchedData, error: getError, setError: setGetError } = useGetData();
    const {postData, isLoading: postLoading, msg: postMsg, setMsg: setPostMsg, error: postError, setError: setPostError } = usePostData();
    const {deleteData, isLoading: deleteLoading, msg: deleteMsg, setMsg: setDeleteMsg, error: deleteError, setError: setDeleteError } = useDeleteData();

    const handleUploadImage = (e, index) => {
        const formData = new FormData();
        formData.append("attachmentFile", e.target.files[0])
        postData(
            "https://localhost:44366/api/Agen/UploadAttachment",
            "uploadAttachment",
            formData,
            {"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>"},
            data,
            setData,
            index
        )
    }
    console.log(data)

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
        setTimeout(()=>window.scrollTo(0, document.body.scrollHeight),50)
    }

    const handleDelete = (deleteIndex) => {
        if(data.attachments[deleteIndex].fileName){
        deleteData(
            `https://localhost:44366/api/Agen/DeleteAttachment?attachmentFileName=${data.attachments[deleteIndex].fileName}`,
            'deleteAttachment',
            data,
            setData,
            deleteIndex
        )
        } else
        setData({
            ...data,
            attachments: data.attachments.filter((attachment, index) => {
                return index != deleteIndex
            })
        })
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
    <Button variant={'outlined'} sx={{maxWidth:'250px', mb:'2rem'}} onClick={handleAddAttachment}>
        <Add sx={{mr:'8px'}} />
        Add Attachment
    </Button>
    <ModalDeleteForm modalDeleteOpen={modalDeleteOpen} setModalDeleteOpen={setModalDeleteOpen} handleDelete={handleDelete} deleteId={deleteId} />

    <Typography component='form' sx={formStyle}>
    {data.attachments?.map((attachment, index)=> {
            return (
                <Stack key={`attachment-${index+1}`} gap={2}>
                    <Stack gap={2}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                        <Typography variant='h2' sx={titleStyle}>
                        Attachment {index+1}
                        </Typography>
                        <button type="button" style={{padding:'8px', border:'none', display:'flex', justifyContent:'center', cursor:'pointer', background:'transparent'}} disabled={postLoading}
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
                        disabled={postLoading}
                        type="file"
                        name={`attachment-${index}`}
                        onChange={(e)=>handleUploadImage(e, index)}
                        />
                        <Typography>{ attachment.fileName }</Typography>
                    </Stack>
                    {attachment.fileName != "" ? 
                    <Stack>
                        <Button variant='contained' type="button" disabled={postLoading} 
                        onClick={()=>handleDownload(index)}
                        sx={{maxWidth:'120px', px:2, py:1}}
                        >Download</Button>
                    </Stack> 
                    : null}
                </Stack>
            )
        })}
    </Typography>
    </>
  )
}
