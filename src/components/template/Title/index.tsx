type TitleProps = {
  title: string
  subtitle: string
}

const Title = ({ subtitle, title }: TitleProps) => {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-900">{title}</h1>
      <h2 className="font-light text-sm text-gray-600">{subtitle}</h2>
    </div>
  )
}

export default Title
