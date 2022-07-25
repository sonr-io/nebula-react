
import Tag from "../../../assets/filled/Tag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagIcon({ className, dataTestid = "TagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Tag data-testid={dataTestid} className={classes} {...rest} />
  );
}
