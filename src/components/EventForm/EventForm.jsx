import { useState } from "react";
import './EventForm.css'

function EventForm() {

    // local state of information to be submitted
    const [event, setEvent] = useState({ title: '', date: '', image: '', info: '', references: '', category_id: '' })

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
    const submit = () => {
        console.log(event)
    }

    return (
        <>
            <div className="center">
                <p>Submit Event</p>
                <div>
                    <input type="text" placeholder="Event Title" onChange={(e) => setEvent({ ...event, title: e.target.value })} />
                </div>
                <div>
                    <input type="date" placeholder="Event Date" onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                </div>
                <div>
                    <input type="file" placeholder="Event Image" onChange={uploadImage} />
                </div>
                <div>
                    <input type="text" placeholder="Event Info" onChange={(e) => setEvent({ ...event, info: e.target.value })} />
                </div>
                <div>
                    <input type="text" placeholder="Event References" onChange={(e) => setEvent({ ...event, references: e.target.value })} />
                </div>
                <div>
                    <form>
                        <label> Select Category </label>
                        <select onChange={(e) => setEvent({ ...event, category_id: e.target.value })}>
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

export default EventForm;