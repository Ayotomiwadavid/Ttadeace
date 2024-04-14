import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Importing read user data to get history
import { readUserData } from '../config/controller';

const MainTable = () => {
    const [user, setUser] = useState('')

    //Call the function on load to get the history
    useEffect(() => {
        readUserData(setUser)
    }, [])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: 'hsl(227, 100%, 56%)',
            color: theme.palette.common.white,
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
    }));

    let allHistory = user.userHistory
    console.log(allHistory)

    return (
        <div className='h-fit w-full max-h-[70vh] flex items-center justify-center'>
            <TableContainer component={Paper} style={{ height: 'fit-content', maxHeight: '70vh', overflow: 'auto' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Transaction ID</StyledTableCell>
                            <StyledTableCell align="right">Date and Time</StyledTableCell>
                            <StyledTableCell align="right">Amount Deposited</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.userHistory && allHistory.map((details) => (
                            <StyledTableRow key={details.userTransactionId}>
                                <StyledTableCell component="th" scope="row">
                                    {details.transanctionDate}
                                </StyledTableCell>
                                <StyledTableCell align="right">{details.userDeposit}</StyledTableCell>
                                <StyledTableCell align="right">{details.transactionStatus}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MainTable
