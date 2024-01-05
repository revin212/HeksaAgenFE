import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const usePutData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const putData = async (url, variant, uploadUrl, data={}, setData, uploadPayload, deleteUrl,deleteAttachments) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            switch(variant){
            case 'editAgen':
                {
                    if(deleteAttachments){
                        await axios.delete(deleteUrl, {data: deleteAttachments});
                    }
                    if(uploadPayload){
                        const uploadResponse = await axios.post(uploadUrl, uploadPayload, {headers: {"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>"}});

                        let tempAttachments = [...data.attachments]
                        for(let i=0; i < uploadResponse.data.length; i++){
                            for(let j=0; j < tempAttachments.length; j++){
                                if(tempAttachments[j].fileName == uploadResponse.data[i].fileName)
                                {
                                    tempAttachments[j].attachmentType = uploadResponse.data[i].attachmentType;
                                    tempAttachments[j].fileType = uploadResponse.data[i].fileType;
                                    tempAttachments[j].fileName = uploadResponse.data[i].fileName;
                                    tempAttachments[j].filePath = uploadResponse.data[i].filePath;
                                }
                            }
                        }
                        setData(
                            {
                                ...data,
                                attachments: tempAttachments
                            }
                        )
                    }
                    
                    await setTimeout(()=>{}, 100)
                    const response = await axios.put(url, data);
                    setMsg(response.data);
                    navigate('/')
                    break; 
                }
            default: break;
            }
        } catch (err) {
            if(typeof err.response?.data === 'string' || err.response?.data instanceof String)
            {
                setMsg('')
                setError(err.response.data)
            } else 
            { 
                setError("Server error, please try again") 
            }
        } finally { setIsLoading(false) }
    }

    return { putData, isLoading, error, setError, msg, setMsg }
}

export default usePutData