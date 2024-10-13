import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Route.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
