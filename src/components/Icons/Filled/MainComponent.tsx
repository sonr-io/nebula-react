
import MainComponent from "../../../assets/filled/MainComponent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MainComponentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MainComponent data-testid="MainComponentIcon" className={classes} />
  );
}
