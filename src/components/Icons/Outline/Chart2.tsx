
import Chart2 from "../../../assets/outline/Chart2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart2Icon({ className, dataTestid = "Chart2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chart2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
