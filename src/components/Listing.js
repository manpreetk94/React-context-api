import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Form , Button, Card} from 'react-bootstrap'

export const Listing = () => {

    const {list,deleteList} = useContext(GlobalContext);

    var total_credit_arr = list.map((l)=>{
        console.log(l)
    });  

    const removeList = (id) => {
        console.log(id,'heree')
        deleteList(id)
    }
   


    return (
        
             <Card border="primary" style={{ width: '18rem',float:'left',marginRight:"15px",margingTop:"15px" }}>
                <Card.Header>List Detail</Card.Header>
                <Card.Body>
                    {list && list.map((l)=>{
                        return <li>{l.type.toUpperCase()} - ${l.amount}
                            <span onClick={ ()=>removeList(l.id)} style={{color:"red","fontSize":"10px",marginLeft:"15px"}}> X</span>
                        </li>
                    })}
           
            </Card.Body>
            </Card>
        
    )
}
