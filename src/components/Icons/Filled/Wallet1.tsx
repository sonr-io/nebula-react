
import Wallet1 from "../../../assets/filled/Wallet1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wallet1Icon({ className, dataTestid = "Wallet1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wallet1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
