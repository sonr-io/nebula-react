
import Wallet3 from "../../../assets/duotone/Wallet3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wallet3Icon({ className, dataTestid = "Wallet3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wallet3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
