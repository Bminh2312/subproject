import React, { useState } from 'react'
import { Container, ListGroup } from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import ChemicalItem from './ChemicalItem';
import AddChemicalItem from './AddChemicalItem';
import SearchBar from './SearchBar';
export default function ChemicalApp() {
  const{chemicals} = useSelector((state)=> state.chemical );
  const dispatch = useDispatch();
  // const [name,setName] = useState("")
  // const [fomula,setFomura] = useState("")
  // const [text,searchText] = useState("")
  
  
  // const handle_submit = ()=>{
  //   dispatch(addChemical({name:name,fomula:fomula}))
  //   setName('')
  //   setFomura('')
  // }

  // const search = (text)=>{
  //   dispatch(searchChemicalByid(text))
    
  // }
 
  return (
    <div>
      <Container className='w-50 text-center p-5 my-5'>
        {/* <Form style={{textAlign:'center',}}>
          <Input style={{width:"50%",textAlign:'center',margin:"15px auto"}} type='text' placeholder='Search'value={text} onChange={(e)=>{searchText(e.target.value)}} />
          <Button onClick={()=>search(text)}>Search</Button>
          <Input style={{width:"50%",textAlign:'center',margin:"15px auto"}} type='text' placeholder='Enter the name of chemical' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <Input  style={{textAlign:'center',width:"50%",margin:"15px auto"}} type='text' placeholder='Enter the formula' value={fomula} onChange={(e)=>{setFomura(e.target.value)}}  />
          <Button onClick={()=>handle_submit()}>Submit</Button>
        </Form> */}
        <SearchBar/>
        <AddChemicalItem />
          {
            chemicals&&chemicals.map((item , index) =>(
              <ListGroup >
                <ChemicalItem key={index} item={item}/>
              </ListGroup>
                
            ))
          }
       
      </Container>
    </div>
  )
}
