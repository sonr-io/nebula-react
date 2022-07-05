
import Text from "../../../assets/duotone/Text.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Text data-testid="TextIcon" className={classes} />
  );
}
