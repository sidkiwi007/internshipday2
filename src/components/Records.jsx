import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const rows = [
  {
    name:'ARUN',
    department:'physics',
    semester:'s2',
  },
  {
  name:'Varun',
  department:'Mathematics',
  semester:'s6',
},
{
  name:'Rahul',
  department:'Chemistry',
  semester:'s3',
},
]

const Records = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">department</TableCell>
            <TableCell align="right">semester</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.semester}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Records