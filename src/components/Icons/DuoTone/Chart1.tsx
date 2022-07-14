
import Chart1 from "../../../assets/duotone/Chart1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Chart1} data-testid="Chart1Icon" className={classes} />
  );
}
