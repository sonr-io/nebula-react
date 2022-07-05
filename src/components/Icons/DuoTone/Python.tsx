
import Python from "../../../assets/duotone/Python.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PythonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Python data-testid="PythonIcon" className={classes} />
  );
}
