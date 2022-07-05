
import Link2 from "../../../assets/duotone/Link2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Link2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Link2 data-testid="Link2Icon" className={classes} />
  );
}
