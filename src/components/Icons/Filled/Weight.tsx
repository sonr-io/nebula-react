
import Weight from "../../../assets/filled/Weight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WeightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Weight data-testid="WeightIcon" className={classes} />
  );
}
