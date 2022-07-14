
import Hierarchy2 from "../../../assets/duotone/Hierarchy2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hierarchy2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hierarchy2} data-testid="Hierarchy2Icon" className={classes} />
  );
}
