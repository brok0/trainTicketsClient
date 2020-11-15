import React , {Component} from 'react';
import {Table , Button} from 'reactstrap';
import {USERS_API_URL} from '../Constants';
import ReserveTicket from "./ReserveTicket";
export class DataTable extends Component{
    
    render(){
        const items = this.props.items;
        return <Table style={{width:"100%"}}>
            <thead className="thead-dark">
                <tr>
                    <th style={{marginLeft:"20px"}}> Номер поїздки</th>
                    <th> Номер поїзду </th>
                    <th> Tип </th>
                    <th> Від </th>
                    <th> До </th>
                    <th> Час Відправки </th>
                    <th> Час Приїзду</th>
                    <th> Ціна </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!items || items.length <= 0  ? // if tickets not exists,or zero tickets,or assigned to admin than not render,4 - ід адміна
                <tr><td colSpan="6" align='center'><b>Нема білетів</b></td></tr> 
                
                : items.map(item => (
                    <tr key={item.id}>
                        <th scope ="row"> {item.id} </th>
                        <td>{item.trainNumber}</td>
                        <td>{item.trainType}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.departureTime}</td>
                        <td>{item.arrivalTime}</td>
                        <td>{item.price}</td>
                        <td align="center" >
                            <div><ReserveTicket ticket = {item}/></div>
                        </td>
                    </tr>
                    
                ))

                }
            </tbody>
        </Table>
    }

}
export default DataTable;