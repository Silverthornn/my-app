import React from "react"
import Login from "./Login"
import {Link} from "react-router-dom"

class Home extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            click : true
        }
    }

    handleClick(){
        if(this.state.click === true){
            return(
                <Login />
            )
        }
    }

    

    render(){
       
        
    return(
        <div>
            <nav>
                <div>
                <input type = "text" name = "searchBar" placeholder="Search items here" /><button>Search</button>
                </div>
                <button>Cart</button>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </nav>
            <p><img src = "Trial1.jpg" alt = "GhMall" width =  "100" height = "100" /></p>
            <nav className ="left-nav">
            <p><h3>Products</h3>
                <Link to="/electronics">
                <h6>Electronics</h6>
                </Link>
                <h6>Fashion</h6>
                <img src = "" alt = "" />
                <h6>Groceries</h6>
                <img src = "" alt = "" />
                <h6>Kids</h6>
                <img src = "" alt = "" />
            </p>
            </nav>
            <p></p>
        </div>
    )
}
}

 

export default Home