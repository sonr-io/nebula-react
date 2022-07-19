
import Simcard1 from "../../../assets/outline/Simcard1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Simcard1Icon({ className, dataTestid = "Simcard1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Simcard1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
