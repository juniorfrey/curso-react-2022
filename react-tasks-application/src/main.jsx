import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { TaskContentProvider } from './content/TaskContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContentProvider>
      <App />
    </TaskContentProvider>
  </React.StrictMode>
)
