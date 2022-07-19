
import Hex from "../../../assets/duotone/Hex.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HexIcon({ className, dataTestid = "HexIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hex data-testid={dataTestid} className={classes} {...rest} />
  );
}
