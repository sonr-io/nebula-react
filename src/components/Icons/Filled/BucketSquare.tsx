
import BucketSquare from "../../../assets/filled/BucketSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BucketSquare data-testid="BucketSquareIcon" className={classes} />
  );
}