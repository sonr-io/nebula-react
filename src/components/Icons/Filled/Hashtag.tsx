
import Hashtag from "../../../assets/filled/Hashtag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HashtagIcon({ className, dataTestid = "HashtagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Hashtag data-testid={dataTestid} className={classes} {...rest} />
  );
}
