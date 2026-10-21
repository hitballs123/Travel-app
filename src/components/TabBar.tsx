import { NavLink, useLocation } from 'react-router'
import { Icon, type IconName } from './Icon'

const tabs: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/search', label: 'Search', icon: 'search' },
  { to: '/picks', label: "Editor's picks", icon: 'star' },
]

// Hidden while following a tour (/e/:id/stop/:n) and on the finish screen (/e/:id/done).
export function TabBar() {
  const { pathname } = useLocation()
  if (/^\/e\/[^/]+\/(stop|done)/.test(pathname)) return null
  return (
    <nav className="tabbar" aria-label="Main">
      {tabs.map((tab) => (
        <NavLink key={tab.to} to={tab.to} end className="tab">
          <Icon name={tab.icon} />
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
