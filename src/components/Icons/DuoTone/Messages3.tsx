
import Messages3 from "../../../assets/duotone/Messages3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Messages3 data-testid="Messages3Icon" className={classes} />
  );
}
