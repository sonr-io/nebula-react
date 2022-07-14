
import BucketCircle from "../../../assets/filled/BucketCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BucketCircle data-testid="BucketCircleIcon" className={classes} />
  );
}
