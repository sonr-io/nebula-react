
import BagHappy from "../../../assets/duotone/BagHappy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagHappyIcon({ className, dataTestid = "BagHappyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BagHappy data-testid={dataTestid} className={classes} {...rest} />
  );
}
