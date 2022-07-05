
import MainComponent from "../../../assets/duotone/MainComponent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MainComponentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MainComponent data-testid="MainComponentIcon" className={classes} />
  );
}
