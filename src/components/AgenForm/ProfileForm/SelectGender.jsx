import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'
// import { useEffect } from 'react';

const genderData = ["Male", "Female"]

export const SelectGender = ({data, setData}) => {
    const handleChange = (e) => {
        setData({
            ...data,
            gender: e.target.value
        })
      };


  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'250px'}} size="small" id='date-select-wrapper'>
        <Select
            displayEmpty
            id="demo-select-small"
            value={data.gender}
            color='text'
            label="gender"
            name="gender"
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (!selected) {
                return <em>Gender</em>;
                }
    
                return selected;
            }}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
            <em>Gender</em>
            </MenuItem>
            {genderData.map((gender)=>{return <MenuItem key={gender} value={gender}>{gender}</MenuItem>})}
        </Select>
    </FormControl>

  )
}
