import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"

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

    // local state of information to be submitted
    const [event, setEvent] = useState({ title: '', date: '', image: '', info: '', references: '', category_id: '' })


    // not usefull maybe use for saving an existing image locally

    // const editEvent = () => {
    //     for (let event of specificEvent) {
    //         console.log(event.title)
    //         setEvent({ title: event.title, date: event.date, image: event.image, info: event.info, references: event.references, category_id: event.category_id })
    //     }
    // }

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
    // WRITE THIS ROUTE!
    const submit = () => {
        console.log(event)
        dispatch({
            type: 'PUT_EVENT',
            payload: event
        })
    }

    return (
        <>
            <div className="center">
                <p>Edit Event</p>
                <div>
                    {specificEvent.map(specific => (
                        <input defaultValue={specific.title} type="text" placeholder="Event Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                    ))}
                </div>
                <div>
                    {specificEvent.map(specific => (
                        <input defaultValue={specific.date} type="date" placeholder="Event Date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                    ))}
                </div>
                {/* make the already existing image save locally before updating the database */}
                <div>
                    <input type="file" placeholder="Event Image" onChange={uploadImage} />
                </div>
                <div>
                    {specificEvent.map(specific => (
                        <input defaultValue={specific.info} type="text" placeholder="Event Info" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
                    ))}
                </div>
                <div>
                    {specificEvent.map(specific => (
                        <input defaultValue={specific.references} type="text" placeholder="Event References" onChange={(e) => setEvent({ ...event, references: e.target.value })} />
                    ))}
                </div>
                <div>
                    <form>
                        <label> Select Category </label>
                        {specificEvent.map(specific => (
                        <select defaultValue={specific.category_id} onChange={(e) => setEvent({ ...event, category_id: e.target.value })}>
                            <option value="1"> Political/Legal
                            </option>
                            <option value="2"> Medical/Scientific
                            </option>
                            <option value="3"> Business/Cultural
                            </option>
                        </select>
                        ))}
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