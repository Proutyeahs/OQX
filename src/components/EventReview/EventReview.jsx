import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function EventReview() {

    // get the event data on page load/reload
    useEffect(() => {
        dispatch({
            type: 'GET_EVENT',
            payload: 1
        })
    }, [])

    const dispatch = useDispatch();
    const history = useHistory();

    const events = useSelector((store) => store.event)

    //formatDate is used to make our timestamps pretty
    const formatDate = (dateString) => {
        const options = { month: "long", day: "numeric", year: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }

    return (
        <>
            <div className="center">
                <form>
                    <label> Pull up events by timeline </label>

                    {/* sorts data by timeline category */}
                    <select onChange={(e) =>
                        dispatch({
                            type: 'GET_EVENT',
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

                {/* loop to render info on dom */}
                {events.map(event => (
                    <p key={event.id}>{event.title}: {formatDate(event.date)}

                        {/* pushes to edit event page */}
                        <button onClick={() => history.push(`/eventFormEdit/${event.id}`)}>Edit</button>
                        
                        {/* dispatches delete request */}
                        <button onClick={() =>
                            dispatch({
                                type: 'DELETE_EVENT',
                                payload: event.id
                            })}>Delete</button></p>
                ))}
            </div>
        </>
    )
}

export default EventReview;