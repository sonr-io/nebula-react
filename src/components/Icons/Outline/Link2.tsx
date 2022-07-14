
import Link2 from "../../../assets/outline/Link2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Link2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Link2} data-testid="Link2Icon" className={classes} />
  );
}
