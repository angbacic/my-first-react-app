import React, { Component } from 'react'

export default class User extends Component {
    render() {
     return   <div>
        <p>Users:</p>
     <b>{ this.props.content }</b>
     </div>
    }
  }
  

