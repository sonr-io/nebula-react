
import Computing from "../../../assets/outline/Computing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ComputingIcon({ className, dataTestid = "ComputingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Computing data-testid={dataTestid} className={classes} {...rest} />
  );
}
