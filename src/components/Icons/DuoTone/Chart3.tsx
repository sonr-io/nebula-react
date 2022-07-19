
import Chart3 from "../../../assets/duotone/Chart3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart3Icon({ className, dataTestid = "Chart3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chart3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
