
import TagCross from "../../../assets/filled/TagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagCrossIcon({ className, dataTestid = "TagCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TagCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
