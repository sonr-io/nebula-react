
import IncreaseIndent from "../../../assets/outline/IncreaseIndent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IncreaseIndentIcon({ className, dataTestid = "IncreaseIndentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <IncreaseIndent data-testid={dataTestid} className={classes} {...rest} />
  );
}
