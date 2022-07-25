
import Eraser1 from "../../../assets/filled/Eraser1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Eraser1Icon({ className, dataTestid = "Eraser1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Eraser1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
