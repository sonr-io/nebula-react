
import PenAdd from "../../../assets/filled/PenAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenAdd data-testid="PenAddIcon" className={classes} />
  );
}
