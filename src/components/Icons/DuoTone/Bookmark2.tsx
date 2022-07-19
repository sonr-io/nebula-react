
import Bookmark2 from "../../../assets/duotone/Bookmark2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Bookmark2Icon({ className, dataTestid = "Bookmark2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bookmark2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
