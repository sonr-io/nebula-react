
import Layer from "../../../assets/filled/Layer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LayerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Layer data-testid="LayerIcon" className={classes} />
  );
}
