
import Drop from "../../../assets/filled/Drop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Drop} data-testid="DropIcon" className={classes} />
  );
}
