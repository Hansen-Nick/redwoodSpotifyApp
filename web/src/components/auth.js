import React, { useState } from 'react'
import axios from 'axios'

const Auth = () => {
  const [token, setToken] = useState(null)

  function hash() {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=')
          initial[parts[0]] = decodeURIComponent(parts[1])
        }
        return initial
      }, {})

    window.location.hash = ''

    setToken(hash.access_token)
  }

  function authInfo() {
    const authEndpoint = 'https://accounts.spotify.com/authorize'

    hash()

    const clientId = '7e2d2c8c567449da91f19267c33aa557'
    const redirectUri = 'http://localhost:8910/'
    const scopes = ['user-top-read']

    if (!token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        '%20'
      )}&response_type=token&show_dialog=true`
    } else {
      alert('You are already logged in!')
    }
  }

  function axiosCall() {
    hash()
    axios
      .get('https://api.spotify.com/v1/me/top/artists', {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div>
      <button onClick={authInfo}>Log in to Spotify!</button>
      <button onClick={axiosCall}>Find top artists!</button>
    </div>
  )
}

export default Auth
