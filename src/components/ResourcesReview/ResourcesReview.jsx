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

function ResourcesReview() {

    // get the data for user stories on page load/reload
    useEffect(() => {
        dispatch({ type: 'FETCH_RESOURCE'})
 }, [dispatch])

    const dispatch = useDispatch();
    const history = useHistory();

    const resources = useSelector((store) => store.resource)

    return (
        <>
            <div className="center">
                <TableContainer >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Resources
                                </TableCell>
                                <TableCell>
                                    Review
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className='outline'>

                            {/* loop to render info on dom */}
                            {resources.map(resource => (
                                <TableRow key={resource.id}>
                                    <TableCell>
                                        {resource.name}:
                                        <br></br>
                                        {resource.address}
                                    </TableCell>
                                    <TableCell>
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

export default ResourcesReview;