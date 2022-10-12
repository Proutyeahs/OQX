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
import DeleteIcon from '@mui/icons-material/Delete';
import './EventFormEdit.css'

function EventFormEdit() {

    // gets specific event info on load/reload
    useEffect(() => {
        reload(id)
    }, [])
    let { id } = useParams()
    const reload = (id) => {
        console.log(id)
        dispatch({
            type: 'GET_SPECIFIC_EVENT',
            payload: id
        })
    }

    // holds the data in the reducer
    const specificEvent = useSelector((store) => store.specificEvent);
    const dispatch = useDispatch();
    const history = useHistory();

    // uploads the image to cloudinary and saves the url in local state
    // *********** change for leos account ***********
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "OQX_Images")
        axios.post("https://api.cloudinary.com/v1_1/dycuh9yxe/image/upload", formData).then((response) => {
            dispatch({
                type: 'PUT_IMAGE',
                payload: response.data.url
            })
            console.log('yo', response.data)
        })
    }

    // handle dispatch of information
    const submit = () => {
        console.log(specificEvent)
        dispatch({
            type: 'PUT_EVENT',
            payload: specificEvent
        })
        setTimeout(() => {
            history.goBack()
        }, 500)
    }

    //formatDate is used to make our timestamps pretty
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <>
            <h1 className="font-bold">Edit Event</h1>
            <div className="center">
                <div>

                    {/* the defaultValue is rendered with the title from the specificEvent object stored in the reducer */}
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline defaultValue={specificEvent.title} type="text"
                        onChange={(e) =>

                            // dispatch sends the new data for the edited title to the object in the reducer
                            dispatch({
                                type: 'PUT_TITLE',
                                payload: e.target.value
                            })} />
                </div>
                <div>
                    <TextField value={formatDate(specificEvent.date)} sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline type="date"
                        onChange={(e) =>
                            dispatch({
                                type: 'PUT_DATE',
                                payload: e.target.value
                            })} />
                </div>

                {/* make the already existing image save locally before updating the database */}
                <div>
                    <Button variant="contained" component="label" sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth>Upload Image
                        <input hidden accept="image/*" multiple type="file" onChange={uploadImage} />
                    </Button>

                    {/* PAGE BREAK */}
                    <br></br>

                    {/* renders the image if it exists */}
                    {specificEvent.image != '' &&
                        <img src={specificEvent.image} />}
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth
                        multiline
                        rows={5} defaultValue={specificEvent.info} type="text"
                        onChange={(e) =>
                            dispatch({
                                type: 'PUT_INFO',
                                payload: e.target.value
                            })} />
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline rows={2} defaultValue={specificEvent.references} type="text"
                        onChange={(e) =>
                            dispatch({
                                type: 'PUT_REFERENCES',
                                payload: e.target.value
                            })} />
                </div>
                <div className="center">
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                            <InputLabel> Select category </InputLabel>
                            <Select label="Select category"
                                value={specificEvent.category_id}
                                onChange={(e) =>
                                    dispatch({
                                        type: 'PUT_CATEGORY_ID',
                                        payload: e.target.value
                                    })}>
                                <MenuItem value={1}> Political/Legal
                                </MenuItem>
                                <MenuItem value={2}> Medical/Scientific
                                </MenuItem>
                                <MenuItem value={3}> Business/Cultural
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

export default EventFormEdit;