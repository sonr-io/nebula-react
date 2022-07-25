
import Tag2 from "../../../assets/outline/Tag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Tag2Icon({ className, dataTestid = "Tag2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Tag2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
