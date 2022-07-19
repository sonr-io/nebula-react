
import HeartSearch from "../../../assets/duotone/HeartSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartSearchIcon({ className, dataTestid = "HeartSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
