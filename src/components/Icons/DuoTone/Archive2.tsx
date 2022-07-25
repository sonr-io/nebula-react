
import Archive2 from "../../../assets/duotone/Archive2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Archive2Icon({ className, dataTestid = "Archive2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Archive2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
