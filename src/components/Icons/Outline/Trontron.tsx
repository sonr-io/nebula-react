
import Trontron from "../../../assets/outline/Trontron.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrontronIcon({ className, dataTestid = "TrontronIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Trontron data-testid={dataTestid} className={classes} {...rest} />
  );
}
