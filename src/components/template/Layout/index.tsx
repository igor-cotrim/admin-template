import useAppData from '../../../data/hooks/useAppData'

import Content from '../Content'
import Header from '../Header'
import Sidebar from '../Sidebar'

type LayoutProps = {
  title: string
  subtitle: string
  children?: React.ReactNode
}

const Layout = ({ title, subtitle, children }: LayoutProps) => {
  const { theme } = useAppData()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <Sidebar />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  )
}

export default Layout
