
import Previous from "../../../assets/filled/Previous.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PreviousIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Previous data-testid="PreviousIcon" className={classes} />
  );
}
