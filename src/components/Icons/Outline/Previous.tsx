
import Previous from "../../../assets/outline/Previous.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PreviousIcon({ className, dataTestid = "PreviousIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Previous data-testid={dataTestid} className={classes} {...rest} />
  );
}
