
import Element2 from "../../../assets/duotone/Element2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Element2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Element2 data-testid="Element2Icon" className={classes} />
  );
}
