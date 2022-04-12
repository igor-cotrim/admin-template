type ContentProps = {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => (
  <div className={`dark:text-gray-200 flex flex-col mt-7`}>{children}</div>
)

export default Content
