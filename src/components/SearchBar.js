import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap'
import {searchChemicalByid} from '../redux/chemicalSice'

export default function SearchBar() {
    const [text,searchText] = useState("")
    const dispatch = useDispatch();
    const search = (text)=>{
          dispatch(searchChemicalByid(text))
          searchText("")
    }

  
  return (
    <div>
       <Input style={{width:"70%",textAlign:'center',margin:"15px auto",display:'inline-block'}} type='text' placeholder='Search'value={text} onChange={(e)=>{searchText(e.target.value)}} />
       <Button style={{width:'30%'}} onClick={()=>search(text)}>Search</Button>
    </div>
  )
}
