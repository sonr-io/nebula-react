
import Battery2full from "../../../assets/filled/Battery2full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Battery2fullIcon({ className, dataTestid = "Battery2fullIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Battery2full data-testid={dataTestid} className={classes} {...rest} />
  );
}
