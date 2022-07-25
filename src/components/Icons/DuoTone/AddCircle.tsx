
import AddCircle from "../../../assets/duotone/AddCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddCircleIcon({ className, dataTestid = "AddCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AddCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
