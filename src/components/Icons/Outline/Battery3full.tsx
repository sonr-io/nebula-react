
import Battery3full from "../../../assets/outline/Battery3full.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Battery3fullIcon({ className, dataTestid = "Battery3fullIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Battery3full data-testid={dataTestid} className={classes} {...rest} />
  );
}
