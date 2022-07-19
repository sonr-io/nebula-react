
import Emercoin from "../../../assets/outline/Emercoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmercoinIcon({ className, dataTestid = "EmercoinIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Emercoin data-testid={dataTestid} className={classes} {...rest} />
  );
}
