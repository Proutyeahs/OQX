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


    // TODO: Delete this block before handoff:
    const handleDummyData = () => {
        console.log('HandleDummyData')
        setEvent({title: 'Sophie Xeon', date: '2021-01-30', image: 'https://eastofborneo.org/wp-content/uploads/2021/02/sophie_renata.jpg', info: `Sophie Xeon (17 September 1986 – 30 January 2021), known mononymously as Sophie (stylised in all caps), was a Scottish music producer, singer and DJ. Known for a brash and experimental take on pop music that helped pioneer the 2010s hyperpop genre \n

        Originally working anonymously, SOPHIE later came out as a trans-woman and would rise to prominence. In 2018, she won the Association of Independent Music's Innovator Award for her self titled album "Sophie" \n
        
        Sophie died in Athens, Greece following an accidental fall while trying to take a picture of the full moon. Many popular artists expressed their condolences such as Rihanna, Sam Smith, Vince Staples, Charli XCX, as well as others. \n
        
        On 16 June 2021, the International Astronomical Union announced that the minor planet 1980 RE1 was given the permanent name Sophiexeon.`, references: ' Day, Laurence. "SOPHIE reveals piercing new single "L.O.V.E."". The Line of Best Fit. Archived from the original on 15 August 2016. Retrieved 12 July 2016.', category_id: '3' })
        console.log(event);
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
        <h1 className="font-bold text-center" onClick={handleDummyData}>Submit Event</h1>
        <div className="center">

            {/* EVENT TITLE */}
            <div>
                <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} multiline type="text" placeholder="Event Title" value = {event.title} onChange={(e) => setEvent(e.target.value)} />
            </div>

            {/* DATE  */}
            <div>
                <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} type="date" value = {event.date} onChange={(e) => setEvent(e.target.value)} />
            </div>

            {/* UPLOAD IMAGE */}
            <div>
                <Button variant="outlined" component="label" sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} fullWidth>Upload Image
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
                <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} multiline rows={5} type="text" placeholder="Event Info" value = {event.info} onChange={(e) => setEvent(e.target.value)} />
            </div>

            {/* EVENT REFERENCES */}
            <div>
                <TextField sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} multiline rows={2} type="text" placeholder="Event References" value = {event.references} onChange={(e) => setEvent(e.target.value)} />
            </div>

            {/* DROPDOWN TO CHOOSE TIMELINE */}
            <div>
                <Box >
                    <FormControl sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }}>
                        <InputLabel> Select category </InputLabel>
                        <Select label="Select category"
                            defaultValue={''} value = {event.category_id} onChange={(e) => setEvent(e.target.value)}>
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
                <Button sx={{ m: 1, minWidth: 120, width: '50%', backgroundColor: "white" }} variant="outlined" color="success" onClick={submit}>Submit</Button>
            </div>
        </div>
    </>
    )
}

export default EventForm;