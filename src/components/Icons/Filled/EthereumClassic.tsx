
import EthereumClassic from "../../../assets/filled/EthereumClassic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EthereumClassicIcon({ className, dataTestid = "EthereumClassicIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EthereumClassic data-testid={dataTestid} className={classes} {...rest} />
  );
}
