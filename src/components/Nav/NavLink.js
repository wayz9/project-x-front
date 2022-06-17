import { NavLink as NavbarLink } from 'react-router-dom'

const NavLink = ({ path, linkText = '', Icon = null, children = null }) => {
  return (
    <li>
      <NavbarLink
        to={path}
        className={({ isActive }) => {
          return isActive
            ? 'relative block pl-7 pr-6 before:absolute before:left-0 before:h-full before:w-1 before:rounded-r before:bg-primary-400'
            : 'relative block pl-7 pr-6'
        }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-neutral-400">
              <Icon color="currentColor" set="curved" strokeWidth="1.8" />
            </div>
            <p className="text-[15px] font-semibold leading-6 text-neutral-100">{linkText}</p>
          </div>
          {children}
        </div>
      </NavbarLink>
    </li>
  )
}

export default NavLink
