
import Link from "../../../assets/duotone/Link.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Link data-testid="LinkIcon" className={classes} />
  );
}