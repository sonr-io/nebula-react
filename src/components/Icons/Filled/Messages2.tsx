
import Messages2 from "../../../assets/filled/Messages2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Messages2Icon({ className, dataTestid = "Messages2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Messages2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
