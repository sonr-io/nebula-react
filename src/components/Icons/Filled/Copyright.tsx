
import Copyright from "../../../assets/filled/Copyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopyrightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Copyright data-testid="CopyrightIcon" className={classes} />
  );
}
