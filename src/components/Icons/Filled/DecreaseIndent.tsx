
import DecreaseIndent from "../../../assets/filled/DecreaseIndent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DecreaseIndentIcon({ className, dataTestid = "DecreaseIndentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DecreaseIndent data-testid={dataTestid} className={classes} {...rest} />
  );
}
