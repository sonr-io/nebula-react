
import Signpost from "../../../assets/duotone/Signpost.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SignpostIcon({ className, dataTestid = "SignpostIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Signpost data-testid={dataTestid} className={classes} {...rest} />
  );
}
