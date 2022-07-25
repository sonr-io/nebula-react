
import Discover1 from "../../../assets/duotone/Discover1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Discover1Icon({ className, dataTestid = "Discover1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Discover1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
