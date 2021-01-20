import React from 'react'

export class Weather extends React.Component {
    render() {
        return (
            <div className ="weather__info">
                {
                    this.props.city && this.props.country && 
                    <p className = "weather__key"> Location : 
                        <span className = "weather__value"> {this.props.city} , {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temprature && 
                    <p className = "weather__key">Temprature: 
                        <span className = "weather__value"> {this.props.temprature}</span>
                    </p>
                }
                {
                    this.props.humidity && 
                    <p className = "weather__key">Humidity : 
                        <span className = "weather__value"> {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description && 
                    <p className = "weather__key">Condition : 
                        <span className = "weather__value"> {this.props.description}</span>
                    </p>
                }
                {
                    this.props.error && 
                    <p className = "weather__error">
                        <span className = "weather__value">{this.props.error}</span>
                    </p>
                }
            </div>
        )
    }
}

export default Weather
 