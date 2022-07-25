
import Eos from "../../../assets/filled/Eos.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EosIcon({ className, dataTestid = "EosIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Eos data-testid={dataTestid} className={classes} {...rest} />
  );
}
