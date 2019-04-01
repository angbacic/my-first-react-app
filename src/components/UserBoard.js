import React, { Component } from 'react'

export default class UserBoard extends Component {
    state= ["angela","kevin","muci"]

    }
    render() {
      return <div>
          <h3> User Board</h3>
         <div>User:{this.state[0]}</div>
         <div>User:{this.state[1]}</div>
         <div>User:{this.state[2]}</div>
         </div>
    }
}