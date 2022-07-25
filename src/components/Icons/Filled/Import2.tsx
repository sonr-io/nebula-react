
import Import2 from "../../../assets/filled/Import2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Import2Icon({ className, dataTestid = "Import2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Import2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
