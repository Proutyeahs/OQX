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

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './EventReview.css'
import Stack from '@mui/material/Stack';


// TABLE MUI FUNCTIONS
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.common.white,
        fontSize: 20
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
})); // END TABLE MUI FUNCTIONS


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
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>
                                    Event
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    Review
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>

                            {/* loop to render info on dom */}
                            {events.map(event => (
                                <StyledTableRow key={event.id}>
                                    <StyledTableCell>
                                        {event.title}:
                                        <br></br>
                                        {formatDate(event.date)}
                                        <br></br>
                                        {event.info}
                                    </StyledTableCell>


                                    <StyledTableCell align="right">
                                        <Stack direction="row" spacing={2}>
                                            {/* pushes to edit event page */}
                                            <EditIcon style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() => history.push(`/eventFormEdit/${event.id}`)}>Edit</EditIcon>

                                            {/* Space between buttons */}
                                            <br></br>
                                            <br></br>

                                            {/* dispatches delete request */}
                                            <DeleteIcon style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() =>
                                                dispatch({
                                                    type: 'DELETE_EVENT',
                                                    payload: event
                                                })}>Delete</DeleteIcon>
                                        </Stack>
                                    </StyledTableCell>


                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default EventReview;