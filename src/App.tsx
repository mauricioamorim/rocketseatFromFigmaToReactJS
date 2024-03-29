import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import { Envelope, Lock } from 'phosphor-react'

import './styles/global.css';

import { Logo } from './styles/Logo';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
                  <Envelope />
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Type your e-mail address" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
                  <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>
      </form>
    </div>
  )
}