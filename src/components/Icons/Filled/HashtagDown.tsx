
import HashtagDown from "../../../assets/filled/HashtagDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagDownIcon({ className, dataTestid = "HashtagDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HashtagDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
