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
            <div className="center">
                <p>Submit Event</p>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120 }} fullWidth multiline type="text" placeholder="Event Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120 }} fullWidth type="date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                </div>
                <div>
                    <Button variant="contained" component="label" sx={{ m: 1, minWidth: 120 }} fullWidth>Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={uploadImage} />
                    </Button>
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120 }} fullWidth multiline maxRows={5} type="text" placeholder="Event Info" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120 }} fullWidth multiline maxRows={2} type="text" placeholder="Event References" onChange={(e) => setEvent({ ...event, references: e.target.value })} />
                </div>
                <div>
                    <Box sx={{ m: 1, minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel> Select Category </InputLabel>
                            <Select defaultValue={''} onChange={(e) => setEvent({ ...event, category_id: e.target.value })}>
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
                <div>
                    <Button variant="contained" color="success" onClick={submit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default EventForm;