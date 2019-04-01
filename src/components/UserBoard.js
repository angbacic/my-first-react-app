import React, { Component } from 'react'

name=["alice","bob","mike"]


export default class UserBoard extends Component {
    render() {
        return <h3>User board:</h3>
        <div>{this.props.name[0]}</div>
        <div>{this.props.name[1]}</div>
        <div>{this.props.name[2]}</div>
    }
}