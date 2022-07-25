
import Message2 from "../../../assets/filled/Message2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Message2Icon({ className, dataTestid = "Message2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Message2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
