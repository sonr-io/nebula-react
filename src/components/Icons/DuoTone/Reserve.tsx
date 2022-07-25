
import Reserve from "../../../assets/duotone/Reserve.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReserveIcon({ className, dataTestid = "ReserveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Reserve data-testid={dataTestid} className={classes} {...rest} />
  );
}
