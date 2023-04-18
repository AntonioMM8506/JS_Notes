// Import core libraries
import React, { FC, ReactNode, Fragment } from 'react'

// Import components
import { Header } from '@/components'

// Data
import navbarItemsData from '@/data/navbar.items.data'

type layoutProps = {
  children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => {

  return (
    <Fragment>
      <Header
        items={navbarItemsData}
      />
      {
        children
      }
    </Fragment>
  )

}

export default Layout
