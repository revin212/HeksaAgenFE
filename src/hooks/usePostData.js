import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const usePostData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const postData = async (url, variant, uploadUrl, payload={}, setData, uploadPayload) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            switch(variant){
            case 'createAgen':
                {
                    if(uploadPayload){
                        const uploadResponse = await axios.post(uploadUrl, uploadPayload, {headers: {"Content-Type": "multipart/form-data; boundary=<calculated when request is sent>"}});
                        let tempAttachments = [...payload.attachments]
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
                                ...payload,
                                attachments: tempAttachments
                            }
                        )
                    }
                    
                    await setTimeout(()=>{}, 100)
                    const response = await axios.post(url, payload);
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

    return { postData, isLoading, error, setError, msg, setMsg }
}

export default usePostData