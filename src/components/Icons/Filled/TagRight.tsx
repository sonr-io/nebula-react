
import TagRight from "../../../assets/filled/TagRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagRightIcon({ className, dataTestid = "TagRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TagRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
