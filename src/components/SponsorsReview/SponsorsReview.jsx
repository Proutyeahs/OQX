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

function SponsorsReview() {

    // get the data for sponsors on page load/reload
    useEffect(() => {
        dispatch({ type: 'FETCH_SPONSOR' })
    }, [dispatch])

    const dispatch = useDispatch();
    const history = useHistory();

    // where sponsor data is stored
    const sponsors = useSelector((store) => store.sponsor)

    return (
        <>
            <div className="center">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>
                                    Sponsors
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    Review
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {sponsors.map(sponsor => (
                                <StyledTableRow key={sponsor.id}>
                                    <StyledTableCell>
                                        {sponsor.company}:
                                        <br></br>
                                        {sponsor.levelOfDonation}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Stack direction="row" spacing={2}>
                                            {/* pushes to edit sponsor page */}
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

export default SponsorsReview;