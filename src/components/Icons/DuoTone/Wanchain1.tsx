
import Wanchain1 from "../../../assets/duotone/Wanchain1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Wanchain1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wanchain1 data-testid="Wanchain1Icon" className={classes} />
  );
}
