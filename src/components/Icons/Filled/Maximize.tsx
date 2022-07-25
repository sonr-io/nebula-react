
import Maximize from "../../../assets/filled/Maximize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaximizeIcon({ className, dataTestid = "MaximizeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize data-testid={dataTestid} className={classes} {...rest} />
  );
}
