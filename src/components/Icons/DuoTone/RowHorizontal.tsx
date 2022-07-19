
import RowHorizontal from "../../../assets/duotone/RowHorizontal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RowHorizontalIcon({ className, dataTestid = "RowHorizontalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RowHorizontal data-testid={dataTestid} className={classes} {...rest} />
  );
}
