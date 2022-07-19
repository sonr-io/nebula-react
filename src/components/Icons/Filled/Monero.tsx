
import Monero from "../../../assets/filled/Monero.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoneroIcon({ className, dataTestid = "MoneroIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Monero data-testid={dataTestid} className={classes} {...rest} />
  );
}
