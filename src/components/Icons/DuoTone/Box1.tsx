
import Box1 from "../../../assets/duotone/Box1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Box1Icon({ className, dataTestid = "Box1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Box1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
