
import AddSquare from "../../../assets/filled/AddSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AddSquareIcon({ className, dataTestid = "AddSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AddSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
