import { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const usePutData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const putData = async (url, variant, payload={}) => {
        try {
            setIsLoading(true);
            setError('');
            setMsg('');
            const response = await axios.put(url, payload);
            switch(variant){
            case 'editAgen':
                {
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