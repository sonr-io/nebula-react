
import FontSize from "../../../assets/duotone/FontSize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FontSizeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FontSize data-testid="FontSizeIcon" className={classes} />
  );
}
