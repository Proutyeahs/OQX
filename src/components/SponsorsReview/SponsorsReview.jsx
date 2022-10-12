import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
import Stack from '@mui/material/Stack';

function SponsorsReview() {

    // get the data for user stories on page load/reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SPONSOR'})
 }, [dispatch])

    const dispatch = useDispatch();
    const history = useHistory();

    const sponsors = useSelector((store) => store.sponsor)

    return (
        <>
            <div className="center">
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Sponsors
                                </TableCell>
                                <TableCell>
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {sponsors.map(sponsor => (
                                <TableRow key={sponsor.id}>
                                    <TableCell>
                                        {sponsor.company}:
                                        <br></br>
                                        {sponsor.levelOfDonation}
                                    </TableCell>
                                    <TableCell>

                                 
                                        <Stack direction="row" spacing={2}>
                                            {/* pushes to edit event page */}
                                            <EditIcon style={{ cursor: 'pointer' }} variant="contained" color="success" onClick={() => history.push(`/sponsorFormEdit/${sponsor.id}`)}>Edit</EditIcon>

                                            {/* Space between buttons */}
                                            <br></br>
                                            <br></br>

                                            {/* dispatches delete request */}
                                            <DeleteIcon style={{ cursor: 'pointer' }} variant="contained" color="error" onClick={() =>
                                                dispatch({
                                                    type: 'DELETE_SPONSOR',
                                                    payload: sponsor
                                                })}>Delete</DeleteIcon>
                                        </Stack>
                               
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

export default SponsorsReview;