import React from 'react'

export default class SearchProfile extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    const user = e.target.username.value
    this.props.searchUser(user)
  }

  render () {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            className="w-full text-center bg-gray-200 h-8 text-gray-600"
            type="search"
            name="username"
            placeholder="Type Username"
          />
        </form>
      </div>
    )
  }
}
