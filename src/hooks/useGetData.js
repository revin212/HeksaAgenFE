import { useState } from 'react';
import axios from 'axios'; 

const useGetData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const getData = async (url, variant, fileName, setFormData, setAttachmentFileNames, setDeleteIndexArray, setUploadFiles) => {
        try {
            setIsLoading(true);
            setError('');
            switch(variant){
            case 'getAllAgen':
                {
                    const response = await axios.get(url);
                    setData(response.data);
                    setFormData(0);
                    break;
                }
            case 'getAgen':
                {
                    const response = await axios.get(url);
                    setData(response.data);
                    break;
                }
            case 'getAgenForEdit':
                {
                    const response = await axios.get(url);
                    setFormData(response.data);
                    if(response.data.attachments){
                        setAttachmentFileNames(response.data.attachments?.map(attachment => attachment.fileName))
                        setDeleteIndexArray(Array(response.data.attachments.length).fill(false))
                        setUploadFiles(Array(response.data.attachments.length).fill(false))
                    }
                    break;
                }
            case 'downloadAttachment':
                {
                    const response = await axios({
                        url: url,
                        method: 'GET',
                        responseType: 'blob',
                    });
                    // create file link in browser's memory
                    const href = URL.createObjectURL(response.data);

                    // create "a" HTML element with href to file & click
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', fileName); //or any other extension
                    document.body.appendChild(link);
                    link.click();

                    // clean up "a" element & remove ObjectURL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(href);
                    break;
                }
            default: break;
            }
        } catch (err) {
            if(typeof err.response.data === 'string' || err.response.data instanceof String)
            {
                setError(err.response.data)
            } else 
            { 
                setError("Server error, please try again") 
            }
        } finally { setIsLoading(false) }
    }

    return { getData, isLoading, error, setError, data, setData }
}

export default useGetData