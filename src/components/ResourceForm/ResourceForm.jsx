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
    const [resource, setResource] = useState({ name: '', phoneNumber: '', address: '', category_id: '' })

    // handle dispatch of information
    const submit = () => {
        dispatch({
            type: 'POST_RESOURCE',
            payload: resource
        })
        if (user.admin) {
            setTimeout(() => {
                window.location.reload();
            }, 500)
        } else {
            // if user isn't admin, push to resources
            setTimeout(() => {
                history.push('/resources')
            }, 500)
        }
    }

    return (
        <>
            <h1 className="font-bold">Submit New Resource</h1>
            <div className="center">

                {/* BUSINESS NAME */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline type="text" placeholder="Business Name" onChange={(e) => setResource({ ...resource, name: e.target.value })} />
                </div>

                {/* NUMBER  */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} type="text" placeholder="Business Phone Number" onChange={(e) => setResource({ ...resource, phoneNumber: e.target.value })} />
                </div>

                {/* BUSINESS ADDRESS */}
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline rows={5} type="text" placeholder="Business Address" onChange={(e) => setResource({ ...resource, address: e.target.value })} />
                </div>

                {/* DROPDOWN TO CHOOSE TIMELINE */}
                <div>
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                            <InputLabel> Select category </InputLabel>
                            <Select label="Select category"
                                defaultValue={''} onChange={(e) => setResource({ ...resource, category_id: e.target.value })}>
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
                    <Button variant="outlined" color="success" onClick={submit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default ResourceForm;