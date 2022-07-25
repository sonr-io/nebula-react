
import Bluetooth2 from "../../../assets/filled/Bluetooth2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Bluetooth2Icon({ className, dataTestid = "Bluetooth2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bluetooth2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
