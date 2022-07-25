
import Messages1 from "../../../assets/outline/Messages1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages1Icon({ className, dataTestid = "Messages1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Messages1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
