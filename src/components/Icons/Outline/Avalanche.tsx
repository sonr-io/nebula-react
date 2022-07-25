
import Avalanche from "../../../assets/outline/Avalanche.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AvalancheIcon({ className, dataTestid = "AvalancheIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Avalanche data-testid={dataTestid} className={classes} {...rest} />
  );
}
