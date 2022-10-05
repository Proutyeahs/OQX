import { useState } from "react";
import { useDispatch } from "react-redux";
import './EventForm.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

//MUI STACK LAYOUT

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// MUI STACK LAYOUT STYLING
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); // end MUI STYLING


function EventForm() {

    const dispatch = useDispatch();

    // local state of information to be submitted
    const [event, setEvent] = useState({ title: '', date: '', image: '', info: '', references: '', category_id: '' })

    // uploads the image to cloudinary and saves the url in local state
    // *********** change for leos account ***********
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "PetEats")
        axios.post("https://api.cloudinary.com/v1_1/dzyea2237/image/upload", formData).then((response) => {
            setEvent({ ...event, image: response.data.url })
            console.log('yo', response.data)
        })
    }

    // handle dispatch of information
    const submit = () => {
        console.log(event)
        dispatch({
            type: 'POST_EVENT',
            payload: event
        })
    }

    return (
        <>
            <h1 className="font-bold">Submit Event</h1>

            <div className="center">
    
             {/* MUI STACK */}
            <Box sx={{ width: '100%' }}>
              <Stack spacing={2}>
              <Item> 
                
            {/* EVENT TITLE */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline type="text" placeholder="Event Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                </div>

            {/* DATE  */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} type="date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                </div>
            
            {/* EVENT INFO */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={4} maxRows={5} type="text" placeholder="Event Info" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
                </div>

            {/* EVENT REFERENCES */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline maxRows={2} type="text" placeholder="Event References" onChange={(e) => setEvent({ ...event, references: e.target.value })} />
                </div>

                {/* DROPDOWN TO CHOOSE TIMELINE */}
                <div>
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                            <InputLabel> Select category </InputLabel>
                            <Select label="Select category"
                            
                            defaultValue={''} onChange={(e) => setEvent({ ...event, category_id: e.target.value })}>
                                <MenuItem value="1"> Political/Legal
                                </MenuItem>
                                <MenuItem value="2"> Medical/Scientific
                                </MenuItem>
                                <MenuItem value="3"> Business/Cultural
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                {/* UPLOAD IMAGE */}
                 <div>
                    <Button variant="contained" component="label" sx={{ m: 1, minWidth: 120 }} >Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={uploadImage} />
                    </Button>
                </div>

                {/* SUBMIT */}
                <div>
                    <Button variant="contained" color="success" onClick={submit}>Submit</Button>
                </div>

          {/* MUI STACK END */}
          </Item>
          </Stack>
          </Box>
            </div>

         

        </>
    )
}

export default EventForm;