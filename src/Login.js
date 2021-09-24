import React from "react"
import {Link} from "react-router-dom"

class Login extends React.Component{
    constructor(){
        super()
        this.state= {
            uName: "",
            mail: "",
            password: ""
            

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
                    <form method="post">
                        <label>Login:</label>
                        <br />
                        <label>Username/Email:</label>
                        <input 
                        type="text" 
                        placeholder="me@gmail.com" 
                        name="mail" 
                        value={this.state.mail} 
                        />

                        <br />
                        <label>Password</label>
                        <input 
                        type="password"  
                        name="password" 
                        value={this.state.password} 
                        />

                        <Link to ='/'>
                        <br />
                        <button>Submit</button>
                        <br />
                        </Link>


                        <p><b>Don't have an account yet?</b> 
                        <Link to="/signup" style={{color:'blue',textDecoration:'underline'}}>
                        Sign up
                        </Link>
                        </p>

                    </form>
                </main>  
            </div>
        )

    }
}


export default Login