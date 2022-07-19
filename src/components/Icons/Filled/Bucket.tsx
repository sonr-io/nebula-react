
import Bucket from "../../../assets/filled/Bucket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BucketIcon({ className, dataTestid = "BucketIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bucket data-testid={dataTestid} className={classes} {...rest} />
  );
}
