import { Component } from "react";
import Register from './Register'
import Login from './Login'
import {Route} from 'react-router-dom'
import Products from './Products'
import Addproduct from './Addproduct'
import Productupdate from './Productupdate'
import Logout from './Logout'

class Container extends Component{
    render(){
        return(
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <Route path="/register" component={Register} />
                        <Route path="/user/login" component={Login} />
                        <Route path="/products" component={Products} />
                        <Route path="/addproducts" component={Addproduct} />
                        <Route path="/productupdate/:id" component={Productupdate} />
                        <Route path="/logout" component={Logout} />
                   </div>
                   
                </div>
            </div>
            
        )
    }
}

export default Container