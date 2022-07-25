
import TagUser from "../../../assets/outline/TagUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagUserIcon({ className, dataTestid = "TagUserIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TagUser data-testid={dataTestid} className={classes} {...rest} />
  );
}
