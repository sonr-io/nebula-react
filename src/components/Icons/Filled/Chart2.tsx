
import Chart2 from "../../../assets/filled/Chart2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Chart2} data-testid="Chart2Icon" className={classes} />
  );
}
