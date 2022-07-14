
import BucketSquare from "../../../assets/duotone/BucketSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={BucketSquare} data-testid="BucketSquareIcon" className={classes} />
  );
}
