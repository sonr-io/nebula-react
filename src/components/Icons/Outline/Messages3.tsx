
import Messages3 from "../../../assets/outline/Messages3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages3Icon({ className, dataTestid = "Messages3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Messages3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
