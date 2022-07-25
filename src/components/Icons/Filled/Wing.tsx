
import Wing from "../../../assets/filled/Wing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WingIcon({ className, dataTestid = "WingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wing data-testid={dataTestid} className={classes} {...rest} />
  );
}
