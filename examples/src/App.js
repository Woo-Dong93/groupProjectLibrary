import React from 'react'
import ReactDOM from 'react-dom'

// import the styles
import { addStyles as addMathquillStyles } from '../../dist/c-15-library'

import EditableMathExample from './EditableMathExample'
import StaticMathExample from './StaticMathExample'

addMathquillStyles()

const App = () => (
  <div>
    <EditableMathExample />
    <StaticMathExample />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
