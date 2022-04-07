import ItemSidebar from './item'
import { IconAjustments, IconHome, IconNotification } from '../../icons'

const Sidebar = () => {
  return (
    <aside>
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
