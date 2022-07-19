
import Diamonds from "../../../assets/outline/Diamonds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiamondsIcon({ className, dataTestid = "DiamondsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Diamonds data-testid={dataTestid} className={classes} {...rest} />
  );
}
