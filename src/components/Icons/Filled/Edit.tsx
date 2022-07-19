
import Edit from "../../../assets/filled/Edit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EditIcon({ className, dataTestid = "EditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Edit data-testid={dataTestid} className={classes} {...rest} />
  );
}
