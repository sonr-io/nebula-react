
import Brush3 from "../../../assets/outline/Brush3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Brush3Icon({ className, dataTestid = "Brush3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Brush3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
