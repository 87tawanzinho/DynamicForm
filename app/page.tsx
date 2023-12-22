"use client"
import Image from 'next/image'
import { useState } from 'react'

interface DataProps {
  name: string,
  email: string,
  idade: string
}
export default function Home() {
  const [account, setAccount] = useState(true)
  const [personal, setPersonal] = useState(false)
  const [sucess, setSucess] = useState(false)
  const [data, setData] = useState<DataProps>({
    name: "",
    email: "",
    idade: ""
  })

  const setDataInputs = (e:React.ChangeEvent<HTMLInputElement> ) => {

    const {name, value} = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))

    console.log(name, value)
  }
  const changeDiv = () => {
    if(data.email === "" || data.name === "") {
      return alert("error")
    }

    handlePersonal()


  }

  const allOk = () => {
    if(!data.idade) {
      return alert("error")
    }

    setSucess(true)


  }
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
      <div className='lg:h-2/4 w-screen sm:w-4/5 lg:w-1/2 bg-white p-8 gap-10 flex flex-col '>
          <div className='flex flex-col'>
            <p className='text-gray-900 text-2xl font-bold'>Registrar</p>
            <p className='text-gray-700 font-bold'>Vamos criar sua conta</p>
          </div>

          <div className='flex justify-around font-bold'>
            <p className={`${account ? "isAccount" : null} cursor-pointer`}>Conta</p>
            <p className={`${!account ? "isPersonal" : null} `}>Informações Pessoais</p>
          
          </div>
        
          {account ? <div className='flex flex-col gap-2 justify-center'>
          <p className='text-gray-700'>Preencha abaixo.</p>
            <div className='flex flex-col gap-4 items-start'>
            <input type="text" placeholder='Nome' className='border-b-2 border-gray-600 p-2' name='name' onChange={setDataInputs}/>
                <input type="text" placeholder='Email' className='border-b-2 border-gray-600 p-2' name='email' onChange={setDataInputs}/>
                <button onClick={changeDiv} className='p-2 bg-purple-700 rounded-lg w-32 text-white font-bold'>Proximo</button>
            </div>
              </div> :  <div className='flex flex-col gap-4 items-start'>
                <p>Você está quase lá!</p>
                <label className='text-gray-600'>Data de Nascimento</label>
            <input type="date" className='border-b-2 border-gray-600 p-2' name='idade' onChange={setDataInputs}/>
          <div className='gap-2 flex'>
          <button onClick={handleAccount} className='p-2 bg-red-700 rounded-lg w-32 text-white font-bold' >Voltar</button>
          <button onClick={allOk} className='p-2 bg-green-700 rounded-lg w-32 text-white font-bold'>Finalizar</button>
          
          </div>
          {sucess && <div>
            <p className='text-green-600 font-bold'>Cadastrado com sucesso em nosso banco de dados!</p></div>}              
            </div>}
      </div>
  </main>
  )
}
