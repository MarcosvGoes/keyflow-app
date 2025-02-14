'use client'
import React, { useState } from 'react';
import Card from "@/components/Card/Card";
import { Eye, EyeClosed } from 'lucide-react';
import Link from 'next/link';

export default function Home() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: '',
    senha: '',
    confirmSenha: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [selectedButton, setSelectedButton] = useState('signin');

  const handleButtonClick = (button: any) => {
    setSelectedButton(button);
  };

  return (
    <main className="mx-auto max-w-[90%] my-8">
      <Card>
        <span className='text-2xl text-blue-500 font-semibold flex justify-center mb-8'>Bem vindo a Keyflow!</span>
        <div className="relative rounded-lg font-semibold shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] grid grid-cols-2 text-2xl overflow-hidden">
          <div className={`absolute inset-y-0 left-0 w-1/2 bg-blue-500 transition-transform duration-300 ease-in-out ${selectedButton === 'signup' ? 'translate-x-full' : 'translate-x-0'}`} />
          <button
            className={`relative py-4 z-10 transition-transform duration-300 ease-in-out ${selectedButton === 'signup' ? 'text-black' : 'text-white'}`}
            onClick={() => handleButtonClick('signin')}
          >
            Entrar
          </button>
          <button
            className={`relative py-4 z-10 transition-transform duration-300 ease-in-out ${selectedButton === 'signup' ? 'text-white' : 'text-black'}`}
            onClick={() => handleButtonClick('signup')}
          >
            Cadastrar
          </button>
        </div>
        {selectedButton === 'signin' ?
          <form action="" className='pt-8'>

            <div className='my-8 grid gap-5'>

              <div>
                <input
                  required
                  type="email"
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='E-mail' />
              </div>

              <div className='relative'>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='Senha' />
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {showPassword ?
                    <Eye color={"#929BA0"} onClick={togglePasswordVisibility} />
                    :
                    <EyeClosed color={"#929BA0"} onClick={togglePasswordVisibility} />}
                </div>
              </div>

              <span className='text-lg font-medium flex justify-end mt-4'>Esqueceu a senha ?</span>

            </div>
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl py-4 rounded-md'>Acessar minha conta</button>

          </form>

          :

          <form action="" className='pt-8'>

            <div className='my-8 grid gap-5'>

              <div>
                <input
                  name='name'
                  required
                  type="text"
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='Nome' />
              </div>

              <div>
                <input
                  name='surname'
                  required
                  type="text"
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='Sobrenome' />
              </div>

              <div>
                <input
                  name='email'
                  required
                  type="email"
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='E-mail' />
              </div>

              <div className='flex items-center'>
                <span className="text-2xl absolute pl-4">+55</span>
                <input
                  name='phone'
                  required
                  type="tel"
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md pl-[40px]'
                  placeholder='' />
              </div>
              
              <hr className='my-6 w-10/12 mx-auto'/>

              <div className='relative'>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='Senha' />
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {showPassword ?
                    <Eye color={"#929BA0"} onClick={togglePasswordVisibility} />
                    :
                    <EyeClosed color={"#929BA0"} onClick={togglePasswordVisibility} />}
                </div>
              </div>

              <div className='relative'>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  className='text-2xl border p-4 w-full focus:border-blue-500 focus:border focus:outline-none rounded-md'
                  placeholder='Confirme sua senha' />
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  {showPassword ?
                    <Eye color={"#929BA0"} onClick={togglePasswordVisibility} />
                    :
                    <EyeClosed color={"#929BA0"} onClick={togglePasswordVisibility} />}
                </div>
              </div>

              <span className='text-lg my-4 font-medium text-center w-11/12 mx-auto'>Ao criar sua conta, você confirma que leu e concorda com os <Link href="#" className='text-blue-500 text-lg font-semibold'>termos de uso</Link> da Keyflow</span>

            </div>
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white text-2xl py-4 rounded-md'>Acessar minha conta</button>

          </form>

        }

      </Card>
    </main>
  );
}