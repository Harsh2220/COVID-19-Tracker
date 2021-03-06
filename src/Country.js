import React, { useEffect, useState } from 'react';
import './Country.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

function Country() {

    const [data, setData] = useState("")

    const getdata = async () => {
        const res = await fetch("https://corona.lmao.ninja/v2/countries");
        const acdata = await res.json();
        console.log(acdata);
        setData(acdata);
    }

    useEffect(() => {
        getdata();
    }, [])

    function set(e) {
       let countryname = e.target.innerHTML;
       localStorage.setItem("countryname",countryname);
    }

    return (
        <div className="country">
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
                        {data && data.map((item) => {
                            return (
                                <TableRow>
                                    <Link to="/state" onClick={set}>
                                        <TableCell align="center" component="th" scope="row">{item.country}</TableCell>
                                    </Link>
                                    <TableCell align="center">{item.active}</TableCell>
                                    <TableCell align="center">{item.deaths}</TableCell>
                                    <TableCell align="center">{item.recovered}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Country