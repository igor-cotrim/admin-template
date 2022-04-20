import { useContext } from 'react'

import AuthContext from '../contexts/AuthContext'

const useAppData = () => useContext(AuthContext)

export default useAppData
