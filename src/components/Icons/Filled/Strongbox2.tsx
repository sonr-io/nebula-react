
import Strongbox2 from "../../../assets/filled/Strongbox2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Strongbox2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Strongbox2 data-testid="Strongbox2Icon" className={classes} />
  );
}
