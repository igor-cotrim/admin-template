/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

import { IconExclamation, IconGoogle } from '../../components/icons'
import AuthInput from '../../components/auth/AuthInput'

const Autentification = () => {
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<null | string>(null)

  const handleError = (msg: string, time = 5) => {
    setError(msg)
    setTimeout(() => setError(null), time * 1000)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (mode === 'signIn') {
      console.log('login')
      handleError('Ocorreu um erro no login!')
    } else {
      console.log('cadastro')
      handleError('Ocorreu um erro no cadastro!')
    }
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autentifição"
          className={`h-screen w-full object-cover`}
        />
      </div>
      <form className={`m-10 w-full  md:w-1/2 lg:w-1/3`} onSubmit={onSubmit}>
        <h1
          className={`
          text-3xl font-bold mb-5
        `}
        >
          {mode === 'signIn'
            ? 'Entre com a Sua Conta'
            : 'Cadastre-se na Plataforma'}
        </h1>
        {error && (
          <div
            className={`
          flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg`}
          >
            <IconExclamation />
            <span className={`ml-2 text-sm`}>{error}</span>
          </div>
        )}
        <AuthInput
          label="E-mail"
          type="email"
          value={email}
          OnChange={setEmail}
          required
        />
        <AuthInput
          label="Senha"
          type="password"
          value={password}
          OnChange={setPassword}
          required
        />
        <button
          className={`
          w-full bg-indigo-500 hover:bg-indigo-400 
          text-white rounded-lg px-4 py-3 mt-6 transition-all`}
        >
          {mode === 'signIn' ? 'Entrar' : 'Cadastrar'}
        </button>
        <hr className={`my-6 border-gray-300 w-full`} />
        <button
          type="button"
          className={`
          flex items-center justify-center
          w-full bg-white hover:bg-gray-100 border border-red-400
          text-red-400 rounded-lg px-4 py-3 transition-all`}
        >
          <IconGoogle />
          Entrar com Google
        </button>

        {mode === 'signIn' ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              onClick={() => setMode('signUp')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Crie uma conta Gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já faz parte da nossa comunidade?
            <a
              onClick={() => setMode('signIn')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {' '}
              Entre com a suas Credenciais
            </a>
          </p>
        )}
      </form>
    </div>
  )
}

export default Autentification
