
import HomeHashtag from "../../../assets/duotone/HomeHashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HomeHashtagIcon({ className, dataTestid = "HomeHashtagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HomeHashtag data-testid={dataTestid} className={classes} {...rest} />
  );
}
