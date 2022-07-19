
import HeartAdd from "../../../assets/duotone/HeartAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartAddIcon({ className, dataTestid = "HeartAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
