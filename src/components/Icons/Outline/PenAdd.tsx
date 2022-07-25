
import PenAdd from "../../../assets/outline/PenAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenAddIcon({ className, dataTestid = "PenAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PenAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
