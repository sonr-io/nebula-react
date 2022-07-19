
import Paperclip2 from "../../../assets/filled/Paperclip2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Paperclip2Icon({ className, dataTestid = "Paperclip2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Paperclip2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
