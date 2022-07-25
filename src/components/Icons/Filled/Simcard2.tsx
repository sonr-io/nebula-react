
import Simcard2 from "../../../assets/filled/Simcard2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Simcard2Icon({ className, dataTestid = "Simcard2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Simcard2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
