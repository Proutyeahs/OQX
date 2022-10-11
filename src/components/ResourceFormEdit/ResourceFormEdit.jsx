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

function ResourceFormEdit() {

    // gets specific event info on load/reload
    useEffect(() => {
        reload(id)
    }, [])
    let { id } = useParams()
    const reload = (id) => {
        console.log(id)
        dispatch({
            type: 'GET_SPECIFIC_RESOURCE',
            payload: id
        })
    }

    // holds the data in the reducer
    const specificResource = useSelector((store) => store.resourceSpecific);
    const dispatch = useDispatch();
    const history = useHistory();

    // handle dispatch of information
    const submit = () => {
        console.log(specificEvent)
        dispatch({
            type: 'PUT_RESOURCE',
            payload: specificResource
        })
        setTimeout(() => {
            history.goBack()
        }, 500)
    }


    return (
        <>
            <h1 className="font-bold">Edit Resource</h1>
            <div className="center">
                <div>

                    {/* the defaultValue is rendered with the name from the specificResource object stored in the reducer */}
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline defaultValue={specificResource.name} type="text"
                        onChange={(e) =>

                            // dispatch sends the new data for the edited name to the object in the reducer
                            dispatch({
                                type: 'PUT_NAME',
                                payload: e.target.value
                            })} />
                </div>

                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth
                        multiline
                        rows={5} defaultValue={specificResource.phoneNumber} type="text"
                        onChange={(e) =>
                            dispatch({
                                type: 'PUT_PHONENUMBER',
                                payload: e.target.value
                            })} />
                </div>
                <div>
                    <TextField sx={{ m: 1, minWidth: 120, width: '50%' }} fullWidth multiline rows={2} defaultValue={specificResource.address} type="text"
                        onChange={(e) =>
                            dispatch({
                                type: 'PUT_ADDRESS',
                                payload: e.target.value
                            })} />
                </div>
                <div className="center">
                    <Box >
                        <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                            <InputLabel> Select category </InputLabel>
                            <Select label="Select category"
                                value={specificResource.category_id}
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

export default ResourceFormEdit;