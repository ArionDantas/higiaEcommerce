import React from "react"
import RoutesApp from "./routes";
import { queryClient } from './services/queryCliente'
import { QueryClientProvider } from '@tanstack/react-query'

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
    </>
  )
}

export default App
