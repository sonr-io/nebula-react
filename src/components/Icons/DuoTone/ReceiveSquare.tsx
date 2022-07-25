
import ReceiveSquare from "../../../assets/duotone/ReceiveSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiveSquareIcon({ className, dataTestid = "ReceiveSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiveSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
