
import Paintbucket from "../../../assets/outline/Paintbucket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaintbucketIcon({ className, dataTestid = "PaintbucketIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Paintbucket data-testid={dataTestid} className={classes} {...rest} />
  );
}
