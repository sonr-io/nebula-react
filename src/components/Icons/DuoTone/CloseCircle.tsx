
import CloseCircle from "../../../assets/duotone/CloseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloseCircleIcon({ className, dataTestid = "CloseCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloseCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
