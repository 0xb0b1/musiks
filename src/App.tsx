import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { MyRoutes } from './Routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
