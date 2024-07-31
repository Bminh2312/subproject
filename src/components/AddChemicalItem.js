import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input } from 'reactstrap'
import {addChemical} from '../redux/chemicalSice'


export default function AddChemicalItem() {
    const dispatch = useDispatch();

    const [name,setName] = useState("")
    const [fomula,setFomura] = useState("")

    const handle_submit = () => {
        dispatch(addChemical({ name: name, fomula: fomula }))
        setName('')
        setFomura('')
    }

    return (
        <Form style={{ textAlign: 'center', }}>
            {/* <Input style={{ width: "50%", textAlign: 'center', margin: "15px auto" }} type='text' placeholder='Search' value={text} onChange={(e) => { searchText(e.target.value) }} />
            <Button onClick={() => search(text)}>Search</Button> */}
            <Input style={{ width: "50%", textAlign: 'center', margin: "15px auto" }} type='text' placeholder='Enter the name of chemical' value={name} onChange={(e) => { setName(e.target.value) }} />
            <Input style={{ textAlign: 'center', width: "50%", margin: "15px auto" }} type='text' placeholder='Enter the formula' value={fomula} onChange={(e) => { setFomura(e.target.value) }} />
            <Button onClick={() => handle_submit()}>Submit</Button>
        </Form>
    )
}
