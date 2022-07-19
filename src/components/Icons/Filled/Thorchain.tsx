
import Thorchain from "../../../assets/filled/Thorchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ThorchainIcon({ className, dataTestid = "ThorchainIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Thorchain data-testid={dataTestid} className={classes} {...rest} />
  );
}
