
import Component from "../../../assets/outline/Component.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ComponentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Component data-testid="ComponentIcon" className={classes} />
  );
}
