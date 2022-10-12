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



function SponsorForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user);

    // local state of information to be submitted
    const [sponsor, setSponsor] = useState({ company: '', image: '', levelOfDonation: ''})

    // handle dispatch of information
    const submit = () => {
        //console.log("submitting:", sponsor)
        dispatch({
            type: 'POST_SPONSOR',
            payload: sponsor
        })
        if (user.admin) {
            setTimeout(() => {
                window.location.reload();
            }, 500)
        } else {
            // if user isn't admin, push to sponsors
            setTimeout(() => {
                history.push('/sponsors')
            }, 500)
        }
    }

    return (
        <>
            <h1 className="font-bold">Submit New Sponsor</h1>

            <div className="center">

                            {/* SPONSOR NAME */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} multiline type="text" placeholder="Company Name" onChange={(e) => setSponsor({ ...sponsor, company: e.target.value })} />
                            </div>

                            {/* IMAGE URL  */}
                            <div>
                                <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} type="text" placeholder="Company Image Url" onChange={(e) => setSponsor({ ...sponsor, image: e.target.value })} />
                            </div>

                            {/* DROPDOWN TO CHOOSE DONATION LEVEL */}
                            <div>
                                <Box >
                                    <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                                        <InputLabel> Select category </InputLabel>
                                        <Select label="Select Sponsorship Tier"

                                            defaultValue={''} onChange={(e) => setSponsor({ ...sponsor, levelOfDonation: e.target.value })}>
                                            <MenuItem value="1"> Gold
                                            </MenuItem>
                                            <MenuItem value="2"> Silver
                                            </MenuItem>
                                            <MenuItem value="3"> Bronze
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

export default SponsorForm;