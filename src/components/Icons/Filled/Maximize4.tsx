
import Maximize4 from "../../../assets/filled/Maximize4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize4Icon({ className, dataTestid = "Maximize4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
