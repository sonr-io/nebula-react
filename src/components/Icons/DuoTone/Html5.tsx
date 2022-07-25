
import Html5 from "../../../assets/duotone/Html5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Html5Icon({ className, dataTestid = "Html5Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Html5 data-testid={dataTestid} className={classes} {...rest} />
  );
}
