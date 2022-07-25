
import Windows from "../../../assets/filled/Windows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WindowsIcon({ className, dataTestid = "WindowsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Windows data-testid={dataTestid} className={classes} {...rest} />
  );
}
