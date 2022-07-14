
import PenAdd from "../../../assets/duotone/PenAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PenAdd} data-testid="PenAddIcon" className={classes} />
  );
}
