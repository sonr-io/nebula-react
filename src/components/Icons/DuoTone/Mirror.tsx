
import Mirror from "../../../assets/duotone/Mirror.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MirrorIcon({ className, dataTestid = "MirrorIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mirror data-testid={dataTestid} className={classes} {...rest} />
  );
}
