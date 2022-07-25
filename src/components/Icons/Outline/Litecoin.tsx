
import Litecoin from "../../../assets/outline/Litecoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LitecoinIcon({ className, dataTestid = "LitecoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Litecoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
