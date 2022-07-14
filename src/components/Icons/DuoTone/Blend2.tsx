
import Blend2 from "../../../assets/duotone/Blend2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Blend2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Blend2} data-testid="Blend2Icon" className={classes} />
  );
}
