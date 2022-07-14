
import Simcard2 from "../../../assets/duotone/Simcard2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Simcard2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Simcard2 data-testid="Simcard2Icon" className={classes} />
  );
}