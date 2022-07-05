
import Link21 from "../../../assets/duotone/Link21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Link21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Link21 data-testid="Link21Icon" className={classes} />
  );
}
