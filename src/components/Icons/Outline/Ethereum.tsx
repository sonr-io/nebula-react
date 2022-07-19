
import Ethereum from "../../../assets/outline/Ethereum.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EthereumIcon({ className, dataTestid = "EthereumIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ethereum data-testid={dataTestid} className={classes} {...rest} />
  );
}
