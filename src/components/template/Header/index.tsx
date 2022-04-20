import useAppData from '../../../data/hooks/useAppData'

import AvatarUser from '../AvatarUser'
import ChangeThemeButton from '../ChangeThemeButton'
import Title from '../Title'

type HeaderProps = {
  title: string
  subtitle: string
}

const Header = ({ subtitle, title }: HeaderProps) => {
  const { onChange, theme } = useAppData()

  return (
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ChangeThemeButton theme={theme} ChangeTheme={onChange} />
        <AvatarUser className={`flex items-center justify-center ml-3`} />
      </div>
    </div>
  )
}

export default Header
