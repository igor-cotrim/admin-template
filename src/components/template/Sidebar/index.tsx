import ItemSidebar from './item'
import { IconAjustments, IconHome, IconNotification } from '../../icons'
import Logo from '../Logo'

const Sidebar = () => {
  return (
    <aside>
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul>
        <ItemSidebar url="/" text="Início" icon={<IconHome />} />
        <ItemSidebar url="/ajusts" text="Ajustes" icon={<IconAjustments />} />
        <ItemSidebar
          url="/notifications"
          text="Notificações"
          icon={<IconNotification />}
        />
      </ul>
    </aside>
  )
}

export default Sidebar
