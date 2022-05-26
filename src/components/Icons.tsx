import Logo from "../assets/GrayInverted.svg";

export function SonrLogoWrapper(_props: any) {
  return (
    <div data-testid="nebula-icon">
      {/* data-testid is for unit testing only and is not needed in prod */}
      <Logo data-testid="logo-svg" className="w-10 h-10 mr-2" />
    </div>
  );
}
