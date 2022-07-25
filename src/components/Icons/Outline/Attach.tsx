
import Attach from "../../../assets/outline/Attach.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachIcon({ className, dataTestid = "AttachIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Attach data-testid={dataTestid} className={classes} {...rest} />
  );
}
