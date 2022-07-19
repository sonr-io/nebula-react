
import Youtube from "../../../assets/filled/Youtube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function YoutubeIcon({ className, dataTestid = "YoutubeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Youtube data-testid={dataTestid} className={classes} {...rest} />
  );
}
