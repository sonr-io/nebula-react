
import CloseSquare from "../../../assets/filled/CloseSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloseSquareIcon({ className, dataTestid = "CloseSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloseSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
