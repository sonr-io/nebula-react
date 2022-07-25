
import Nebulas from "../../../assets/filled/Nebulas.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NebulasIcon({ className, dataTestid = "NebulasIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Nebulas data-testid={dataTestid} className={classes} {...rest} />
  );
}
