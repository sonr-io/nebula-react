
import Siacoin from "../../../assets/duotone/Siacoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SiacoinIcon({ className, dataTestid = "SiacoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Siacoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
