
import GridEdit from "../../../assets/duotone/GridEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridEditIcon({ className, dataTestid = "GridEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GridEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
