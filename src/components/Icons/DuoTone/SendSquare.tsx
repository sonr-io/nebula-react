
import SendSquare from "../../../assets/duotone/SendSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SendSquareIcon({ className, dataTestid = "SendSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SendSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
