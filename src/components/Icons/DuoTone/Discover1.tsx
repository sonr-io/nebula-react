
import Discover1 from "../../../assets/duotone/Discover1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Discover1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Discover1} data-testid="Discover1Icon" className={classes} />
  );
}
