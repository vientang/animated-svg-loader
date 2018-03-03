import React from 'react'
import ReactDOM from 'react-dom'
import LoadingBars from './LoadingBars'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<LoadingBars />, document.getElementById('root'))
registerServiceWorker()
