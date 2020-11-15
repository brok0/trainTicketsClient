import React,{Component} from 'react';
import {TICKETS_API_URL} from "../Constants";
import {Button} from 'reactstrap';
export class ReserveTicket extends Component{
    state= {
        userId:5, //regular user id, static for testing
    }
    moveToUserAccount = item =>{  //assign user id,that will mean that this ticket is reserved,
        fetch(`${TICKETS_API_URL}/${item.id}`,{
            method:'put',
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(res =>{
            this.item.PersonID = 5;
        })
        .catch(err=>console.log(err));
    }
    render(){
        return <Button color ="success" onClick={()=>this.moveToUserAccount(5)}>Зарезервувати</Button>
    }
}
export default ReserveTicket;