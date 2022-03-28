import { useState } from 'react'
import { Transactions, Services, Navbar, Footer, Loader, Welcome } from "./component/index"

const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Services />
      <Footer />
      {/* <Loader /> */}
    </div>
  )
}

export default App