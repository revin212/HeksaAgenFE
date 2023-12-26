import { FormControl, OutlinedInput, MenuItem, Select } from '@mui/material'

const strataList = ["D3", "D4", "S1", "S2", "S3"]

export const SelectStrata = ({data, setData, educationIndex}) => {
    const handleChange = (e) => {
        setData({
            ...data,
            educations: data.educations.map((education, index)=>{
                if(index == educationIndex)
                {
                    return {
                        ...education,
                        strata: e.target.value
                    }
                } else
                return education
            })
        })
      };


  return (
    <FormControl sx={{ m: 0, width:'100%', maxWidth:'250px'}} size="small" id='date-select-wrapper'>
        <Select
            displayEmpty
            id="demo-select-small"
            value={data.educations[educationIndex].strata}
            color='text'
            label="strata"
            name="strata"
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
                if (!selected) {
                return <em>Strata</em>;
                }
    
                return selected;
            }}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
            <em>Strata</em>
            </MenuItem>
            {strataList.map((strata)=>{return <MenuItem key={strata} value={strata}>{strata}</MenuItem>})}
        </Select>
    </FormControl>

  )
}
