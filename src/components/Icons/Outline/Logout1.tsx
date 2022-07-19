
import Logout1 from "../../../assets/outline/Logout1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Logout1Icon({ className, dataTestid = "Logout1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Logout1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
