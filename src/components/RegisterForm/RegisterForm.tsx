import React, { useState } from 'react'
import { registerFormProps } from '../../types/registerFormProps';

export function RegisterForm(props: registerFormProps) {
  const [snr, setSnr] = useState('');

  const onSubmitWrapper = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        SNR: { value: string };
    }
    const snr = target.SNR.value;
    setSnr(snr);
    alert(`You have registered ${snr}`);
  }
  return (
    <div>
        <form onSubmit={onSubmitWrapper} className='w-full max-w-md mx-auto'>
            <div className='flex items-center border-b border-primaryLight-500 py-2'>
                <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' id='SNR' type='text' placeholder='SNR' value={props.domain}/>
                <button className='flex-shrink-0 bg-primaryLight-500 hover:bg-primaryLight-700 border-primaryLight-500 hover:border-primaryLight-700 text-sm border-4 text-white py-1 px-2 rounded' type='submit'>
                    Register
                </button>
            </div>
        </form>
    </div>
  )
}
