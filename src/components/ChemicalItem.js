import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteChemicalByid, editChemicalName,editChemicalFormula } from '../redux/chemicalSice'
import { Button, Input, ListGroupItem, Table } from 'reactstrap'

export default function ChemicalItem(props) {
    const { item } = props
    const [name, setName] = useState(item.name)
    const [fomula, setFomula] = useState(item.fomula)
    const [flag1, setFlag1] = useState(true)
    const [flag2, setFlag2] = useState(true)
    const dispatch = useDispatch();

    const handle_delete = () => {
        dispatch(deleteChemicalByid(item))
    }

    return (
        <ListGroupItem>
            <Table striped style={{ width: '100%' }}>
                <thead style={{ textAlign: "center" , width:"25%"}}>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Fomula</th>
                    <th>Action</th>
                </thead>
                <tbody style={{ textAlign: "center" ,width:"25%"}}>
                    <td style={{ textAlign: "center" ,width:"25%"}} >{item.id}</td>
                    <td style={{ textAlign: "center" ,width:"25%"}} onDoubleClick={()=> setFlag1(false)}>{
                        flag1?<p>{item.name}</p>:<Input type='text' value={name} onChange={(e) => setName(e.target.value)} onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                dispatch(editChemicalName({id:item.id,name:name}))
                                setName("")
                                setFlag1(true)
                            }
                        }}/>
                        }
                    </td>
                    <td style={{ textAlign: "center" ,width:"25%"}} onDoubleClick={()=> setFlag2(false)}>{
                        flag2?<p>{item.fomula}</p>:<Input type='text' value={fomula} onChange={(e) => setFomula(e.target.value)} onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                dispatch(editChemicalFormula({id:item.id,fomula:fomula}))
                                setFomula("")
                                setFlag2(true)
                            }
                        }}/>
                        }
                    </td>
                    <td>
                        <Button onClick={() => handle_delete(item.id)}
                        >Delete</Button>
                    </td>
                </tbody>
            </Table>
        </ListGroupItem>
    )
}
