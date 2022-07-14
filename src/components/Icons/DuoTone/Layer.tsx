
import Layer from "../../../assets/duotone/Layer.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LayerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Layer} data-testid="LayerIcon" className={classes} />
  );
}
