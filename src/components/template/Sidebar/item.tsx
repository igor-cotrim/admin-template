import Link from 'next/link'

type ItemSidebarProps = {
  url: string
  text: string
  icon: React.ReactNode
}

const ItemSidebar = ({ icon, text, url }: ItemSidebarProps) => {
  return (
    <li className="hover:bg-gray-100">
      <Link href={url}>
        <a className="flex flex-col justify-center items-center h-20 w-20">
          {icon}
          <span className="text-xs font-light text-gray-600">{text}</span>
        </a>
      </Link>
    </li>
  )
}

export default ItemSidebar
