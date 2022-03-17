import React , {useContext} from 'react'
import {Card} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {

    const {list} = useContext(GlobalContext);

    var total_credit_arr = list.map((l)=>l.type=='credit'?l.amount:0);  
    console.log('total_credit_arr',total_credit_arr)
    const total_credit = total_credit_arr.reduce((acc, item) => (acc += item), 0);


    var total_debit_arr = list.map((l)=>l.type=='debit'?l.amount:0);  
    const total_debit = total_debit_arr.reduce((acc, item) => (acc += item), 0);
    console.log('total_debit_arr',total_debit_arr)

    var total = total_credit -  total_debit


    return (
        <div>
              <Card border="primary" style={{ width: '18rem',float:'left',marginRight:"15px" }}>
                <Card.Header>Total Debit</Card.Header>
                <Card.Body>
                <Card.Title>Amount:</Card.Title>
                <Card.Text>
                {total_debit}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' ,float:'left',marginRight:"15px" }}>
                <Card.Header>Total Credit</Card.Header>
                <Card.Body>
                <Card.Title>Amount:</Card.Title>
                <Card.Text>
                    {total_credit}
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Total </Card.Header>
                <Card.Body>
                <Card.Title>Amount:</Card.Title>
                <Card.Text>
                    {total}
                </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}
