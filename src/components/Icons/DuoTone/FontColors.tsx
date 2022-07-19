
import FontColors from "../../../assets/duotone/FontColors.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FontColorsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FontColors data-testid="FontColorsIcon" className={classes} />
  );
}
