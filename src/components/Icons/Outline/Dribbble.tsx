
import Dribbble from "../../../assets/outline/Dribbble.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DribbbleIcon({ className, dataTestid = "DribbbleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dribbble data-testid={dataTestid} className={classes} {...rest} />
  );
}
