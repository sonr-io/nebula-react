
import Save2 from "../../../assets/outline/Save2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Save2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Save2 data-testid="Save2Icon" className={classes} />
  );
}
