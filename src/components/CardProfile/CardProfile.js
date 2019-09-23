import React from 'react'
import axios from 'axios'
import SearchProfile from '../SearchProfile/SearchProfile'

export default class CardProfile extends React.Component {
  state = {
    user: {
      avatarUrl: '',
      name: '',
      location: '',
      followers: 0,
      repos: 0,
      following: 0
    },
    isFound: true
  }

  componentDidMount () {
    this.searchUser('alanredael')
  }

  searchUser = async newUser => {
    const uri = 'https://api.github.com/users/' + newUser
    const response = await axios.get(uri).catch(err => {
      console.error('failed to fetch from api: ', err.message)
      return null
    })
    if (!response) {
      this.setState({
        isFound: false
      })
      return
    } else {
      this.setState({
        isFound: true
      })
    }
    const { data } = response
    console.log('data: ', data)
    const { avatar_url: avatarUrl, name, location, followers, public_repos: repos, following } = data
    this.setState({
      user: {
        avatarUrl,
        name,
        location,
        followers,
        repos,
        following
      }
    })
  }

  userInfo () {
    if (this.state.isFound) {
      return (
        <div>
          <div className="width-full flex justify-center pl-1 pt-6">
            <img className="w-40 h-40 rounded-full" src={this.state.user.avatarUrl} alt="User Avatar" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">{this.state.user.name}</div>
            <p className="text-gray-700 text-base text-center">{this.state.user.location}</p>
          </div>
          <div className="px-6 py-8 bg-blue-400 rounded">
            <ul className="flex justify-between">
              <li className="inline-block text-center mr-6">
                <p className="font-bold text-xl text-white">{this.state.user.followers}</p>
                <span className="font-semibold text-white">Followers</span>
              </li>
              <li className="inline-block text-center mr-6">
                <p className="font-bold text-xl text-white">{this.state.user.repos}</p>
                <span className="font-semibold text-white">Repositories</span>
              </li>
              <li className="inline-block text-center">
                <p className="font-bold text-xl text-white">{this.state.user.following}</p>
                <span className="font-semibold text-white">Following</span>
              </li>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1 className="font-bold text-center text-xl pt-4 pb-4 text-blue-500">Oops!</h1>
          <p className="text-xl text-center text-gray-600 pb-4">User not found.</p>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="self-center mt-4 w-1/3">
        <div className="bg-white max-auto rounded overflow-hidden shadow-lg p-2">
          <SearchProfile searchUser={this.searchUser} />
          {this.userInfo()}
        </div>
      </div>
    )
  }
}
