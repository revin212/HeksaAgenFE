import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const usePostData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const postData = async (url, variant, payload={}, header={}, data, setData, changeIndex) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const response = await axios.post(url, payload, {headers: header});
            switch(variant){
            case 'createAgen':
                {
                    setMsg(response.data);
                    navigate('/')
                    break; 
                }
            case 'uploadAttachment':
                {
                    setData({
                        ...data,
                        attachments: data.attachments.map((attachment, index)=>{
                            if(index == changeIndex){
                                attachment = {
                                    attachmentType : response.data.attachmentType,
                                    fileType : response.data.fileType,
                                    fileName: response.data.fileName,
                                    filePath: response.data.filePath
                                }
                                return attachment
                            }
                            else return attachment
                        })
                    })
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