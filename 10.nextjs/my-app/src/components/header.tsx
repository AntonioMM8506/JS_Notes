// Import core libraries
import React, { FC, Fragment } from 'react'
import Link from 'next/link'
import NavbarItemsInterface from '@/interfaces/navbar.items.interface'

type headerProps = {
  items: NavbarItemsInterface[]
}

const Header: FC<headerProps> = ({ items }) => {

  return (
    <header
      className={'container mx-auto grid grid-cols-3 gap-4'}
    >
      <div>Logo</div>

      {/* Navbar */}
      <nav
        className={'col-span-2'}
      >
        <ul
          className={'flex justify-end'}
        >
          {
            items.map((item, index) => {
              return (
                <li key={`navbar-item-${index}`}
                  className={'px-6 py-3'}
                >
                  <Link
                    href={item.to}
                    className={'font-black hover:text-blue-500 active:text-red-700 visited:text-blue-800'}
                  >
                    {
                      item.name
                    }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )

}

export default Header