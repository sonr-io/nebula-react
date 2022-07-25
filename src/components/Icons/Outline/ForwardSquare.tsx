
import ForwardSquare from "../../../assets/outline/ForwardSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardSquareIcon({ className, dataTestid = "ForwardSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ForwardSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
