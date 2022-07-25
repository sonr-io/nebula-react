
import Chart21 from "../../../assets/filled/Chart21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart21Icon({ className, dataTestid = "Chart21Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Chart21 data-testid={dataTestid} className={classes} {...rest} />
  );
}
