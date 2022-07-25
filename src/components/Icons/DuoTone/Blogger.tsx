
import Blogger from "../../../assets/duotone/Blogger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BloggerIcon({ className, dataTestid = "BloggerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Blogger data-testid={dataTestid} className={classes} {...rest} />
  );
}
