
import BucketSquare from "../../../assets/duotone/BucketSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketSquareIcon({ className, dataTestid = "BucketSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BucketSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
