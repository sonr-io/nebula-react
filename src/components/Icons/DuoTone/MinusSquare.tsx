
import MinusSquare from "../../../assets/duotone/MinusSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinusSquareIcon({ className, dataTestid = "MinusSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MinusSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
