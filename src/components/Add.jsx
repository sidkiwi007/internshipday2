import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({person}) => {
    // const [count,setcount]=useState(0);
    // let valueAdd=()=>{
    //   setcount(count+1)
    // }
    
    const[form,setform]=useState(
      {
      fname:person.fname,
      department:person.department,
      semester:person.semester,
      }
    )
    function valueCap(e)
    {
      // console.log(e)
      setform({...form,[e.target.name]:e.target.value})

    }
    let valueAdd=()=>{
      console.log(form)
    }

  return (
    <div>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required-Name"
        //defaultValue="Hello World"
        name="fname"
        value={form.fname}
        onChange={valueCap}
      />
      <br/>
      <TextField
        required
        id="outlined-required"
        label="Required-Department"
        //defaultValue="Hello World"
        name="department"
        value={form.department}
        onChange={valueCap}
      />
      <br/>
      <TextField
        id="outlined-required"
        label="Required-Semester"
        name="semester"
        value={form.semester}
        onChange={valueCap}
      />
        <br/>
        <Button variant='contained' color='success' onClick={valueAdd}>Submit</Button>
        <br/>
        {/* <small>count is {count}</small> */}
      </div>

    </Box>
    </div>

  )
}
export default Add