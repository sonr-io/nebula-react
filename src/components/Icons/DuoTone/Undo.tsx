
import Undo from "../../../assets/duotone/Undo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UndoIcon({ className, dataTestid = "UndoIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Undo data-testid={dataTestid} className={classes} {...rest} />
  );
}
