
import Link1 from "../../../assets/duotone/Link1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Link1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Link1 data-testid="Link1Icon" className={classes} />
  );
}
