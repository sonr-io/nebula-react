
import Lovely from "../../../assets/filled/Lovely.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LovelyIcon({ className, dataTestid = "LovelyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lovely data-testid={dataTestid} className={classes} {...rest} />
  );
}
