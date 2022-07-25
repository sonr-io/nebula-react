
import Tether from "../../../assets/filled/Tether.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TetherIcon({ className, dataTestid = "TetherIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Tether data-testid={dataTestid} className={classes} {...rest} />
  );
}
