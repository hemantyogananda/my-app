import React from 'react'
import RootLayout from './layout'

function home({props}) {
  return (
    <RootLayout>
        <h1>Welcome to the Home Page</h1>
        <h4>{props.metadata.title}</h4>
        <p>This is the main content of the home page.</p>
    </RootLayout>
  )
}

export default home
