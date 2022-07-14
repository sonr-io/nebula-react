
import Bucket from "../../../assets/filled/Bucket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bucket data-testid="BucketIcon" className={classes} />
  );
}
