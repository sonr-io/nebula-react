
import Support24 from "../../../assets/duotone/Support24.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Support24Icon({ className, dataTestid = "Support24Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Support24 data-testid={dataTestid} className={classes} {...rest} />
  );
}
