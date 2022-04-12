import Link from 'next/link'

type ItemSidebarProps = {
  url?: string
  text: string
  icon: React.ReactNode
  className?: string
  onClick?: (event: any) => void
}

const ItemSidebar = ({
  icon,
  text,
  url,
  onClick,
  className
}: ItemSidebarProps) => (
  <li
    onClick={onClick}
    className={`dark:hover:bg-gray-800 hover:bg-gray-100 cursor-pointer`}
  >
    {url ? (
      <Link href={url}>
        <a
          className={`dark:text-gray-200 flex flex-col justify-center items-center text-gray-600 h-20 w-20 ${className}`}
        >
          {icon}
          <span className={`text-xs font-light`}>{text}</span>
        </a>
      </Link>
    ) : (
      <a
        className={`flex flex-col justify-center items-center text-gray-600 h-20 w-20 ${className}`}
      >
        {icon}
        <span className={`text-xs font-light`}>{text}</span>
      </a>
    )}
  </li>
)

export default ItemSidebar
