import React  from 'react'

class Form extends React.Component {
    render() {
        return (
            <form onSubmit = {this.props.getWeather} >
                <input type = "text" name = "city" placeholder = "Enter city" />
                <input type = "text" name = "country" placeholder = "Enter country" />
                <button type = "submit">Get weather</button>
            </form>
        )
    }
}

export default Form
