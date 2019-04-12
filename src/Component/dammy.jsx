import React, { Component } from 'react'

export default class dammy extends Component {
  render() {
    // const { name } = this.props
    return (
      <div>
        {
          this.props.name.map((newArray, index) => (
            <div key={index}>
              <h2>{newArray.name}</h2>
            </div>
          ))
        }
      </div>
    )
  }
}
