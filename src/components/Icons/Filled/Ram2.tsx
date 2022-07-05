
import Ram2 from "../../../assets/filled/Ram2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Ram2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ram2 data-testid="Ram2Icon" className={classes} />
  );
}
