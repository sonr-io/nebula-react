
import Edit2 from "../../../assets/outline/Edit2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Edit2Icon({ className, dataTestid = "Edit2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Edit2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
