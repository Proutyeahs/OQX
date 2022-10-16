import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import './EventForm.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';

function EventForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);

    // local state of information to be submitted
    const [event, setEvent] = useState({ title: '', date: '', image: '', info: '', references: '', category_id: '' })

    // uploads the image to cloudinary and saves the url in local state
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "OQX_Images")
        axios.post("https://api.cloudinary.com/v1_1/dycuh9yxe/image/upload", formData).then((response) => {
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
        if (user.admin) {
            setTimeout(() => {
                window.location.reload();
            }, 500)
        } else {
            // popup to thanks for submission
            setTimeout(() => {
                history.push('/medicalScientific')
            }, 500)
        }
    }

    return (
        <>
            <h1 className="font-bold">Submit Event</h1>
            <div className="center">

                {/* EVENT TITLE */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor:"white"}} multiline type="text" placeholder="Event Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                </div>

                {/* DATE  */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor:"white" }} type="date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                </div>

                {/* UPLOAD IMAGE */}
                <div>
                    <Button variant="outlined" component="label" sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor:"white" }} fullWidth>Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={uploadImage} />
                    </Button>
                </div>

                {/* renders the image if it exists */}
                {event.image != '' &&
                    <div className="center">
                        <img className="size" src={event.image} />
                    </div>
                }

                {/* EVENT INFO */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' , backgroundColor:"white"}} multiline rows={5} type="text" placeholder="Event Info" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
                </div>

                {/* EVENT REFERENCES */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor:"white" }} multiline rows={2} type="text" placeholder="Event References" onChange={(e) => setEvent({ ...event, references: e.target.value })} />
                </div>

                {/* DROPDOWN TO CHOOSE TIMELINE */}
                <div>
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' , backgroundColor:"white"}}>
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

                {/* SUBMIT */}
                <div>
                    <Button  sx={{ m: 1, minWidth: 120, width: '50%' , backgroundColor:"white"}} variant="outlined" color="success" onClick={submit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default EventForm;