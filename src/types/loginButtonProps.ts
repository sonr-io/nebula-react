import { ButtonProps } from "./buttonProps";

export interface LoginButtonProps extends Omit<ButtonProps, 'onClick' | 'type'> {
  domain: string; // snr domain naim for authentication
  onLogin: AuthenticationResult; // callback for post authentication steps
  onError: AuthenticationError; // callback for error during authentication flow.
}

/**
 * Called on the resolve of the authentication operation.
 * @param result boolean indicating the status of the authentication
 */
export declare type AuthenticationResult = (result: boolean) => void;

/**
 * Called on error during authentication flow. passes error context to the callback.
 */
export declare type AuthenticationError = (error: any) => void;
