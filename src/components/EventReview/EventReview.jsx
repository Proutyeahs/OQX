import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function EventReview() {

    // get the event data on page load/reload
    useEffect(() => {
        dispatch({
            type: 'GET_EVENT_ADMIN',
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
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 120, width: '50%' }}>
                        <InputLabel> Events by timeline </InputLabel>

                        {/* sorts data by timeline category */}
                        <Select label="Events by timeline"
                            defaultValue={1} onChange={(e) =>
                                dispatch({
                                    type: 'GET_EVENT_ADMIN',
                                    payload: e.target.value
                                })}>
                            <MenuItem value="1"> Political/Legal
                            </MenuItem>
                            <MenuItem value="2"> Medical/Scientific
                            </MenuItem>
                            <MenuItem value="3"> Business/Cultural
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Event
                                </TableCell>
                                <TableCell>
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {events.map(event => (
                                <TableRow key={event.id}>
                                    <TableCell>
                                        {event.title}:
                                        <br></br>
                                        {formatDate(event.date)}
                                    </TableCell>
                                    <TableCell>

                                        {/* pushes to edit event page */}
                                        <Button variant="contained" color="success" onClick={() => history.push(`/eventFormEdit/${event.id}`)}>Edit</Button>

                                        {/* Space between buttons */}
                                        &nbsp;

                                        {/* dispatches delete request */}
                                        <Button variant="contained" color="error" onClick={() =>
                                            dispatch({
                                                type: 'DELETE_EVENT',
                                                payload: event
                                            })}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default EventReview;