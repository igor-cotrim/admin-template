import Image from 'next/image'
import Link from 'next/link'

import { supabase } from '../../../utils/supabaseClient'

type AvatarUserProps = {
  className?: string
}

const AvatarUser = ({ className }: AvatarUserProps) => {
  const user = supabase.auth.user()

  return (
    <div className={`${className}`}>
      <Link href="/profile" passHref>
        <Image
          className={`w-10 h-10 rounded-full cursor-pointer `}
          src={user?.user_metadata?.avatar_url ?? '/images/avatar.svg'}
          alt="Avatar do Usuário"
          width={40}
          height={40}
          layout="fixed"
        />
      </Link>
    </div>
  )
}

export default AvatarUser
