import Content from '../Content'
import Header from '../Header'
import Sidebar from '../Sidebar'

type LayoutProps = {
  title: string
  subtitle: string
  children?: React.ReactNode
}

const Layout = ({ title, subtitle, children }: LayoutProps) => {
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Sidebar />
      <Content>{children}</Content>
    </div>
  )
}

export default Layout
