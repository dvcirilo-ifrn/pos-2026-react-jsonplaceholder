import { Outlet, Link } from 'react-router-dom'
import { Menu } from './Menu'

export function Layout() {
  return (
    <div>
        <Menu />
        <hr />
        <Outlet />
    </div>
  )
}