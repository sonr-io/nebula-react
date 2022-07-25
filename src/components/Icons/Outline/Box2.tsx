
import Box2 from "../../../assets/outline/Box2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Box2Icon({ className, dataTestid = "Box2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Box2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
