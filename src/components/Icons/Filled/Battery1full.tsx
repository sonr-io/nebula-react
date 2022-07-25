
import Battery1full from "../../../assets/filled/Battery1full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Battery1fullIcon({ className, dataTestid = "Battery1fullIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Battery1full data-testid={dataTestid} className={classes} {...rest} />
  );
}
