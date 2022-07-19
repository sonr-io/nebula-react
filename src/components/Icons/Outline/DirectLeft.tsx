
import DirectLeft from "../../../assets/outline/DirectLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectLeftIcon({ className, dataTestid = "DirectLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
