
import Trash from "../../../assets/duotone/Trash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrashIcon({ className, dataTestid = "TrashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Trash data-testid={dataTestid} className={classes} {...rest} />
  );
}
