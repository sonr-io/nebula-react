export interface loginButtonProps {
    domain: string;         // snr domain naim for authentication
    label: string;          // label for the button
    styling: string;        // css style string
    onLogin: () => void;    // callback for post authentication steps
}