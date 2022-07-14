
import Component from "../../../assets/filled/Component.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ComponentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Component data-testid="ComponentIcon" className={classes} />
  );
}
