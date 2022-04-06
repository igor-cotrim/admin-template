type TitleProps = {
  title: string
  subtitle: string
}

const Title = ({ subtitle, title }: TitleProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default Title
