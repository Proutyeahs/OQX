import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

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

    const specificEvent = useSelector((store) => store.specificEvent);
    const dispatch = useDispatch();

    // uploads the image to cloudinary and saves the url in local state
    // *********** change for leos account ***********
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "PetEats")
        axios.post("https://api.cloudinary.com/v1_1/dzyea2237/image/upload", formData).then((response) => {
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
    }

    return (
        <>
            <div className="center">
                <p>Edit Event</p>
                <div>
                        <input type="text" placeholder="Event Title" onChange={(e) => 
                        dispatch({
                            type: 'PUT_TITLE',
                            payload: e.target.value
                        })} />
                </div>
                <div>
                        <input type="date" placeholder="Event Date" onChange={(e) => 
                        dispatch({
                            type: 'PUT_DATE',
                            payload: e.target.value
                        })} />
                </div>
                {/* make the already existing image save locally before updating the database */}
                <div>
                    <input type="file" placeholder="Event Image" onChange={uploadImage} />
                </div>
                <div>
                        <input type="text" placeholder="Event Info" onChange={(e) => dispatch({
                            type: 'PUT_INFO',
                            payload: e.target.value
                        })} />
                </div>
                <div>
                        <input type="text" placeholder="Event References" onChange={(e) => dispatch({
                            type: 'PUT_REFERENCES',
                            payload: e.target.value
                        })} />
                </div>
                <div>
                    <form>
                        <label> Select Category </label>
                        <select onChange={(e) => dispatch({
                            type: 'PUT_CATEGORY_ID',
                            payload: e.target.value
                        })}>
                            <option value="1"> Political/Legal
                            </option>
                            <option value="2"> Medical/Scientific
                            </option>
                            <option value="3"> Business/Cultural
                            </option>
                        </select>
                    </form>
                </div>
                <div>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default EventFormEdit;