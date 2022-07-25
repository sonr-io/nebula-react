
import Flag2 from "../../../assets/filled/Flag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Flag2Icon({ className, dataTestid = "Flag2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Flag2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
