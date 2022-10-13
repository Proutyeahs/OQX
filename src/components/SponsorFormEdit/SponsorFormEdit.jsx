import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

function SponsorFormEdit() {

    // gets specific sponsor info on load/reload
    useEffect(() => {
        reload(id)
    }, [])
    let { id } = useParams()
    const reload = (id) => {
        console.log(id)
        dispatch({
            type: 'GET_SPECIFIC_SPONSOR',
            payload: id
        })
    }

    // holds the data in the reducer
    const specificSponsor = useSelector((store) => store.sponsorSpecific);
    const dispatch = useDispatch();
    const history = useHistory();

    // handle dispatch of information
    const submit = () => {
        console.log(specificSponsor)
        dispatch({
            type: 'PUT_SPONSOR',
            payload: specificSponsor
        })
        setTimeout(() => {
            history.goBack()
        }, 500)
    }

    // uploads the image to cloudinary and saves the url in local state
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "OQX_Images")
        axios.post("https://api.cloudinary.com/v1_1/dycuh9yxe/image/upload", formData).then((response) => {
            dispatch({
                type: 'PUT_IMAGE_SPONSOR',
                payload: response.data.url
            })
            console.log('yo', response.data)
        })
    }

    return (
        <>
            <h1 className="font-bold">Edit Resource</h1>
            <div className="center">
                <div>

                    {/* the defaultValue is rendered with the company name from the specificSponsor object stored in the reducer */}
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline defaultValue={specificSponsor.company} type="text"
                        onChange={(e) =>

                            // dispatch sends the new data for the edited company name to the object in the reducer
                            dispatch({
                                type: 'PUT_COMPANY',
                                payload: e.target.value
                            })} />
                </div>

                <div>
                    {/* IMAGE URL  */}
                <div>
                    <Button variant="contained" component="label" sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth>Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={uploadImage} />
                    </Button>
                </div>

                {/* renders the image if it exists */}
                {specificSponsor.image != '' &&
                    <div className="center">
                        <img className="size" src={specificSponsor.image} />
                    </div>
                }
                </div>
                <div className="center">
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                            <InputLabel> Select Tier </InputLabel>
                            <Select label="Select tier"
                                value={specificSponsor.levelOfDonation}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'PUT_LEVELOFDONATION',
                                        payload: e.target.value
                                    })}>
                                <MenuItem value={1}> Gold
                                </MenuItem>
                                <MenuItem value={2}> Silver
                                </MenuItem>
                                <MenuItem value={3}> Bronze
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

export default SponsorFormEdit;