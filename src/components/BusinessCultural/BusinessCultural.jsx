import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

function BusinessCultural() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
          type: 'GET_EVENT'
        })
      }, [])

    const events = useSelector((store) => store.event)
    return (
        <>
            {events.map(event => (
                <p>{ event.title }</p>
            ))}
        </>
    )
}

export default BusinessCultural;