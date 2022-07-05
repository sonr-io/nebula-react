
import BucketCircle from "../../../assets/duotone/BucketCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BucketCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BucketCircle data-testid="BucketCircleIcon" className={classes} />
  );
}
