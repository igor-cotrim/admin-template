import useAppData from '../../data/hooks/useAppData'

import Layout from '../../components/template/Layout'

const Notification = () => {
  const { onChange } = useAppData()

  return (
    <Layout
      title="Notificações"
      subtitle="Aqui você irá gerenciar as suas notificações!"
    >
      <h3>Notificações</h3>
      <button onClick={onChange}> Alterar tema</button>
    </Layout>
  )
}

export default Notification
