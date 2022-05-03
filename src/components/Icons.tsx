import {ReactComponent as Logo} from './../assets/Gray_Inverted.svg';
import React from 'react';

export const SonrLogoWrapper = (props: any) => {
    return (
        <div>
            <Logo data-testid="logo-svg" className="w-10 h-10 mr-2"/>
        </div>
    );
};