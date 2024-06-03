import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <>
            <h1>
                This is myApp !! Hemendra
            </h1>
        </>
    )
}

// const reactElement = {
//   type: 'a',
//   prop: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit "Google"'
// }

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit Google'
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  //   <MyApp />
  <App />
  // </>

  //anotherElement
  //reactElement
)
