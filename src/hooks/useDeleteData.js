import { useState } from 'react';
import axios from 'axios'; 

const useDeleteData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const deleteData = async (url, variant, data, setData, deleteIndex) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const response = await axios.delete(url);
            switch(variant){
            case 'deleteAgen':
                {
                    setMsg(response.data);
                    setData(data.filter((agen)=>agen.id != deleteIndex))
                    break; 
                }
            case 'deleteAttachment':
                {
                    setData({
                        ...data,
                        attachments: data.attachments.filter((attachment, index) => {
                            return index != deleteIndex
                        })
                    })
                    break;
                }
            default: break;
            }
        } catch (err) {
            if(typeof err.response.data === 'string' || err.response.data instanceof String)
            {
                setMsg('')
                setError(err.response.data)
            } else 
            { 
                setError("Server error, please try again") 
            }
        } finally { setIsLoading(false) }
    }

    return { deleteData, isLoading, error, setError, msg, setMsg }
}

export default useDeleteData