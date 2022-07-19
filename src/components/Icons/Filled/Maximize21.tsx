
import Maximize21 from "../../../assets/filled/Maximize21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize21Icon({ className, dataTestid = "Maximize21Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize21 data-testid={dataTestid} className={classes} {...rest} />
  );
}
