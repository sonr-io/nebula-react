
import Ram2 from "../../../assets/duotone/Ram2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ram2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ram2 data-testid="Ram2Icon" className={classes} />
  );
}
