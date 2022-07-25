
import Reddit from "../../../assets/filled/Reddit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RedditIcon({ className, dataTestid = "RedditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Reddit data-testid={dataTestid} className={classes} {...rest} />
  );
}
