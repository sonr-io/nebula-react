
import Setting2 from "../../../assets/filled/Setting2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Setting2Icon({ className, dataTestid = "Setting2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Setting2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
