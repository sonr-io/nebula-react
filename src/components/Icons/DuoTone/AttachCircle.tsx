
import AttachCircle from "../../../assets/duotone/AttachCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachCircleIcon({ className, dataTestid = "AttachCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AttachCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
