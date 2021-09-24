import React from "react"
import {Link} from "react-router-dom"

class Signup extends React.Component{
    constructor(){
        super()
        this.state= {
            firstName: "",
            lastName: "",
            uName: "",
            password: "",
            confPassword: "",
            mail: "",
            gender: "",
            restrictions: "",
            remPass: true,
            phone: ""
            


        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"? this.setState({[name]:checked}): this.setState({[name]:value})
    }


    render(){
        return(
            <div>
                <main>
                    <form method= "post">
                        <label><h4>Sign up</h4></label>
                        <br />
                        <label>First name:</label>
                        <input 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName" 
                        value={this.state.firstName} 
                        />

                        <br />
                        <label>Last name</label>
                        <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={this.state.lastName} 
                        />

                        <br />

                        <label>Username</label>
                        <input 
                        type="text" 
                        placeholder="name" 
                        name="uName" 
                        value={this.state.lastName} 
                        />

                        <br />

                        
                        <label>Email:</label>
                        <input 
                        type="email" 
                        placeholder="me@gmail.com" 
                        name="mail" 
                        value={this.state.age} 
                        />

                        <br />
                        <label>Password:</label>
                        <input 
                        type="password" 
                        name="password" 
                        value={this.state.age} 
                        />

                        <br />
                        <label>Confirm Password:</label>
                        <input 
                        type="password"  
                        name="confPassword" 
                        value={this.state.age} 
                        />

                        <br />
                        <label>Phone:</label>
                        <input 
                        type="number" 
                        placeholder="(+233)***" 
                        name="phone" 
                        value={this.state.age} 
                        />

                        <br />
                        Gender:
                        <br />
                        <input 
                        type="radio" 
                        name="gender" 
                        value= "male"
                        checked={this.state.gender ==="male"} 
                        onChange={this.handleChange}
                        />
                        Male
                        <br />
                        <input 
                        type="radio" 
                        name="gender" 
                        value="female"
                        checked= {this.state.gender ==="female"} 
                        onChange= {this.handleChange}
                        />
                        Female
                        <br />
                        
                        <br/>
                        <input 
                        type="checkbox"  
                        name="vegan" 
                        checked={this.state.vegan}
                        onChange={this.handleChange} 
                        />
                        Remember my password
                        <br />
                        
                        <Link to="/">
                        <button>Home</button>
                        </Link>
                    </form>
                </main>  
            </div>
        )

    }
}


export default Signup