
import Stellar from "../../../assets/filled/Stellar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StellarIcon({ className, dataTestid = "StellarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Stellar data-testid={dataTestid} className={classes} {...rest} />
  );
}
