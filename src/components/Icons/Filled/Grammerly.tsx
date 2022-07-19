
import Grammerly from "../../../assets/filled/Grammerly.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GrammerlyIcon({ className, dataTestid = "GrammerlyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grammerly data-testid={dataTestid} className={classes} {...rest} />
  );
}
