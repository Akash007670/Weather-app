import React from 'react'

const Form = ({getWeather}) => {
    return (
        <div>
            <h1>Form component</h1>
            <form onSubmit = {getWeather} >
                <input type = "text" name = "city" placeholder = "Enter city" />
                <input type = "text" name = "country" placeholder = "Enter country" />
                <button type = "submit">submit</button>
            </form>
        </div>
    )
}

export default Form
