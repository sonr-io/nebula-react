
import Radar2 from "../../../assets/outline/Radar2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Radar2Icon({ className, dataTestid = "Radar2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Radar2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
