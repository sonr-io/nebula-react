
import Chart1 from "../../../assets/filled/Chart1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart1Icon({ className, dataTestid = "Chart1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chart1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
