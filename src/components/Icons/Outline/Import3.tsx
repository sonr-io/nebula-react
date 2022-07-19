
import Import3 from "../../../assets/outline/Import3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Import3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Import3 data-testid="Import3Icon" className={classes} />
  );
}
