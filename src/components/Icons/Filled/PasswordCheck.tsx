
import PasswordCheck from "../../../assets/filled/PasswordCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PasswordCheckIcon({ className, dataTestid = "PasswordCheckIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PasswordCheck data-testid={dataTestid} className={classes} {...rest} />
  );
}
