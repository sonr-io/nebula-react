
import ElementPlus from "../../../assets/outline/ElementPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElementPlusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ElementPlus data-testid="ElementPlusIcon" className={classes} />
  );
}