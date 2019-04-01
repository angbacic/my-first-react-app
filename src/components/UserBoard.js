import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return <h3>User board:</h3>
        <div>{this.props.name}</div>
    }
}