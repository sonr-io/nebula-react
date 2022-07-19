
import HashtagUp from "../../../assets/filled/HashtagUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagUpIcon({ className, dataTestid = "HashtagUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HashtagUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
