import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';



function ResourceForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);

    // local state of information to be submitted
    //const [event, setEvent] = useState({ title: '', date: '', image: '', info: '', references: '', category_id: '' })

    // uploads the image to cloudinary and saves the url in local state
    // // *********** change for leos account ***********
    // const uploadImage = (e) => {
    //     console.log(e.target.files[0])
    //     const formData = new FormData();
    //     formData.append("file", e.target.files[0])
    //     formData.append("upload_preset", "OQX_Images")
    //     axios.post("https://api.cloudinary.com/v1_1/dycuh9yxe/image/upload", formData).then((response) => {
    //         setEvent({ ...event, image: response.data.url })
    //         console.log('yo', response.data)
    //     })
    // }

    // handle dispatch of information
    const submit = () => {
        console.log(resource)
        dispatch({
            type: 'POST_RESOURCE',
            payload: resource
        })
        if (user.admin) {
            setTimeout(() => {
                window.location.reload();
            }, 500)
        } else {
            // popup to thanks for submission
            setTimeout(() => {
                history.push('/resources')
            }, 500)
        }

    }

    return (
        <>
            <h1 className="font-bold">Submit Resource</h1>

            <div className="center">

             

                            {/* BUSINESS NAME */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline type="text" placeholder="Business Name" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                            </div>

                            {/* NUMBER  */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} type="text" placeholder="Business Phone Number" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                            </div>

                            {/* BUSINESS ADDRESS */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={5} type="text" placeholder="Business Address" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
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

                            {/* SUBMIT */}
                            <div>
                                <Button variant="contained" color="success" onClick={submit}>Submit</Button>
                            </div>

                        
            </div>
        </>
    )
}

export default ResourceForm;