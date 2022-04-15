import { RegisterButtonProps } from '../../types/registerButtonProps';
import { SonrLogoWrapper } from '../Icons';
import { MouseEventHandler } from 'react';

export function RegisterButton(RegisterButtonProps: RegisterButtonProps) {
  function onClickWrapper(callback: () => void): MouseEventHandler<HTMLButtonElement> {
    return (e: any) => {
      callback && callback();
    }
  };
  return (
    <div className="inline-flex items-center mx-auto pt-8">
        <button 
          className={RegisterButtonProps.styling}
          onClick={onClickWrapper(RegisterButtonProps.onRegister)}
          >
          <SonrLogoWrapper/>
          <span className='text-md pr-8'>{RegisterButtonProps.label}</span>
        </button>
    </div>
  )
}