
import ElementPlus from "../../../assets/duotone/ElementPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ElementPlusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ElementPlus data-testid="ElementPlusIcon" className={classes} />
  );
}
