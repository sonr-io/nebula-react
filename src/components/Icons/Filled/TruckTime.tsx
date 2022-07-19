
import TruckTime from "../../../assets/filled/TruckTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckTimeIcon({ className, dataTestid = "TruckTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TruckTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
