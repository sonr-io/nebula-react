
import ReceiveSquare2 from "../../../assets/filled/ReceiveSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiveSquare2Icon({ className, dataTestid = "ReceiveSquare2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ReceiveSquare2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
