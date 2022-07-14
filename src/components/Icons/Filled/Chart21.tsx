
import Chart21 from "../../../assets/filled/Chart21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Chart21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Chart21} data-testid="Chart21Icon" className={classes} />
  );
}
