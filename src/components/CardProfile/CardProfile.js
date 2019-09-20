import React from 'react'
import './CardProfile.css'

export default class CardProfile extends React.Component {
  render () {
    return (
      <div className="self-center mt-4">
        <div className="bg-white max-auto rounded overflow-hidden shadow-lg p-2">
          <div className="width-full flex justify-center pl-1 pt-6">
            <img
              className="w-40 h-40 rounded-full"
              src="https://tailwindcss.com/img/card-top.jpg"
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base text-center">Analist</p>
          </div>
          <div className="px-6 py-8 bg-blue-400 rounded">
            <ul className="flex justify-between">
              <li className="inline-block text-center mr-6">
                <p className="font-bold text-xl text-white">ola</p>
                <span className="font-semibold text-white">Followers</span>
              </li>

              <li className="inline-block text-center mr-6">
                <p className="font-bold text-xl text-white">ola</p>
                <span className="font-semibold text-white">Repositories</span>
              </li>
              <li className="inline-block text-center">
                <p className="font-bold text-xl text-white">ola</p>
                <span className="font-semibold text-white">Following</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

/*
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
  #photography
            </span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
    #travel
            </span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
    #winter
            </span>*/
