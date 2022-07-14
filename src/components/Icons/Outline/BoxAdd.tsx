
import BoxAdd from "../../../assets/outline/BoxAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxAdd data-testid="BoxAddIcon" className={classes} />
  );
}
