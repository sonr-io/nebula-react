
import Support24 from "../../../assets/filled/Support24.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Support24Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Support24 data-testid="Support24Icon" className={classes} />
  );
}
