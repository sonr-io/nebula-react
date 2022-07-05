
import Messages1 from "../../../assets/duotone/Messages1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Messages1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Messages1 data-testid="Messages1Icon" className={classes} />
  );
}
