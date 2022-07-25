
import BucketCircle from "../../../assets/outline/BucketCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketCircleIcon({ className, dataTestid = "BucketCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BucketCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
