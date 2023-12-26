import { Input, Stack, Typography } from '@mui/material';
import { formStyle, inputStyle, inputDateStyle } from '../AgenFormStyles';
import { SelectGender } from './SelectGender';

export const ProfileForm = ({ data, setData }) => {
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


  return (
    <Typography component='form' sx={formStyle}>
        <Stack gap={2}>
            <Typography>Name</Typography>
            <Input disableUnderline name={"name"} autoComplete='name' value={ data.name } onChange={handleChange} id='name-input' type="text" placeholder="Name" sx={inputStyle}/>
        </Stack>
        <Stack gap={2}>
            <Typography>Gender</Typography>
            <SelectGender data={data} setData={setData} />
        </Stack>
        <Stack gap={2}>
            <Typography>Birth Place</Typography>
            <Input disableUnderline name={"birthPlace"} value={ data.birthPlace } onChange={handleChange} id='birthPlace-input' type="text" placeholder="Birth Place" sx={inputStyle}/>
        </Stack>
        <Stack gap={2}>
            <Typography>Birth Date</Typography>
            <input name="birthDate" id="birthDate" type="date" style={{...inputDateStyle, width: "250px",outline: 'none'}}
            value={data.birthDate} 
            onChange={(e) =>setData({
                            ...data,
                            birthDate: e.target.value
                        })} />
        </Stack>
        <Stack gap={2}>
            <Typography>Address</Typography>
            <Input disableUnderline name={"address"} value={ data.address } onChange={handleChange} id='address-input' type="text" placeholder="Address" sx={inputStyle}/>
        </Stack>
        <Stack gap={2}>
            <Typography>Email</Typography>
            <Input disableUnderline name={"email"} autoComplete='email' value={ data.email } onChange={handleChange} id='email-input' type="email" placeholder="Email" sx={inputStyle}/>
        </Stack>
        <Stack gap={2}>
            <Typography>Phone</Typography>
            <Input disableUnderline name={"phone"} value={ data.phone } onChange={handleChange} id='phone-input' type="text" placeholder="Phone" sx={inputStyle}/>
        </Stack>
        <Stack gap={2}>
            <Typography>ID Card</Typography>
            <Input disableUnderline name={"idCard"} value={ data.idCard } onChange={handleChange} id='idCard-input' type="text" placeholder="ID Card" sx={inputStyle}/>
        </Stack>
    </Typography>
)
}
