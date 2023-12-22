"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [account, setAccount] = useState(true)
  const [personal, setPersonal] = useState(false)

  const handlePersonal = () => {
    setPersonal(true)
    setAccount(false)

  }

  const handleAccount = () => {
    setAccount(true)
    setPersonal(false)
  }
  return (
  <main className='css-bg h-screen flex justify-center items-center'>
      <div className='h-2/4  lg:h-2/4 w-screen sm:w-4/5 lg:w-1/2 bg-white p-8 gap-10 flex flex-col '>
          <div className='flex flex-col'>
            <p className='text-gray-900 text-2xl font-bold'>Registrar</p>
            <p className='text-gray-700 font-bold'>Vamos criar sua conta</p>
          </div>

          <div className='flex justify-around font-bold'>
            <p className={`${account ? "isAccount" : null} cursor-pointer`} onClick={handleAccount}>Conta</p>
            <p onClick={handlePersonal} className={`${!account ? "isPersonal" : null} cursor-pointer`}>Informações Pessoais</p>
          </div>
      </div>
  </main>
  )
}
