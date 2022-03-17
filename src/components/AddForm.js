import React , {useState,useContext} from 'react'
import {Form , Button, Card} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState';

export const AddForm = () => {

    const [amount,setAmount] = useState(0);
    const [type,setType] = useState('debit');
    const {addList,list} = useContext(GlobalContext);

    const handleAddrTypeChange = (e) =>{
        setType(e.target.value)
        console.log(e.target.value)
    }

    const submitHander = (e) =>{
        e.preventDefault();

        var nlist = {  
            id:    list.length+1,    
            type:type.toLocaleLowerCase(),
            amount: parseInt(amount)
          }
      console.log(nlist)
          addList(nlist);

    }

    return (
        <div>
              <Card border="primary" style={{ width: '18rem',float:'left',marginRight:"15px",margingTop:"15px" }}>
                <Card.Header>Add Amount</Card.Header>
                <Card.Body>
            <Form onSubmit={submitHander}>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Amount</Form.Label>
                    <Form.Control placeholder="Amount"  name="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" >
                     <Form.Label>Type</Form.Label>
                        <Form.Select name="type"   onChange={e => handleAddrTypeChange(e)}>
                        <option selected value="debit">Debit</option>
                        <option value="credit">Credit</option>
                        </Form.Select>
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card.Body>
            </Card>
            
        </div>
    )
}
