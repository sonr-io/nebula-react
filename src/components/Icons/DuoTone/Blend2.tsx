
import Blend2 from "../../../assets/duotone/Blend2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Blend2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Blend2 data-testid="Blend2Icon" className={classes} />
  );
}
