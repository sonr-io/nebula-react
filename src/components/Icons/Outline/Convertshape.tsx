
import Convertshape from "../../../assets/outline/Convertshape.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ConvertshapeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convertshape data-testid="ConvertshapeIcon" className={classes} />
  );
}
