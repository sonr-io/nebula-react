
import Archive1 from "../../../assets/outline/Archive1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Archive1Icon({ className, dataTestid = "Archive1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Archive1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
