import React, { useEffect, useState } from 'react';
import './State.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function State() {

    const [data, setData] = useState("")

    const getdata = async () => {
        var country = localStorage.getItem('countryname');
        const res = await fetch(`https://corona.lmao.ninja/v2/countries/${country}`);
        const acdata = await res.json();
        console.log(acdata);
        setData(acdata);
    }

    useEffect(() => {
        getdata();
    }, [])

    return (
        <div className="state">
            <h1>COVID-19 Data</h1>
            <TableContainer className="container" component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "lightblue" }}>
                            <TableCell align="center" >Country</TableCell>
                            <TableCell align="center" >Active</TableCell>
                            <TableCell align="center" >Deaths</TableCell>
                            <TableCell align="center" >Recovered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center" component="th" scope="row">{data.country}</TableCell>
                            <TableCell align="center">{data.active}</TableCell>
                            <TableCell align="center">{data.deaths}</TableCell>
                            <TableCell align="center">{data.recovered}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default State
