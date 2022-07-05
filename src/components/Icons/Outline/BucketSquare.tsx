
import BucketSquare from "../../../assets/outline/BucketSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BucketSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BucketSquare data-testid="BucketSquareIcon" className={classes} />
  );
}
