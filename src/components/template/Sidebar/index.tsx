import Logo from '../Logo'
import ItemSidebar from './item'
import {
  IconAjustments,
  IconHome,
  IconLogout,
  IconNotification
} from '../../icons'

const Sidebar = () => {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20`}
      >
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <ItemSidebar url="/" text="Início" icon={<IconHome />} />
        <ItemSidebar url="/ajusts" text="Ajustes" icon={<IconAjustments />} />
        <ItemSidebar
          url="/notifications"
          text="Notificações"
          icon={<IconNotification />}
        />
      </ul>
      <ul>
        <ItemSidebar
          onClick={() => console.log('logout')}
          className={`text-red-600 hover:bg-red-400 hover:text-white`}
          text="Sair"
          icon={<IconLogout />}
        />
      </ul>
    </aside>
  )
}

export default Sidebar
