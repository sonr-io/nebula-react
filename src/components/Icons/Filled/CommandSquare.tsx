
import CommandSquare from "../../../assets/filled/CommandSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CommandSquareIcon({ className, dataTestid = "CommandSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CommandSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
