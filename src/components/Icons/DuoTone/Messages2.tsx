
import Messages2 from "../../../assets/duotone/Messages2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Messages2 data-testid="Messages2Icon" className={classes} />
  );
}
