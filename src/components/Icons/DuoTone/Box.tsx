
import Box from "../../../assets/duotone/Box.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxIcon({ className, dataTestid = "BoxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Box data-testid={dataTestid} className={classes} {...rest} />
  );
}
