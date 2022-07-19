
import HomeTrendUp from "../../../assets/outline/HomeTrendUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeTrendUpIcon({ className, dataTestid = "HomeTrendUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HomeTrendUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
