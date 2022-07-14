
import Strongbox2 from "../../../assets/duotone/Strongbox2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Strongbox2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Strongbox2} data-testid="Strongbox2Icon" className={classes} />
  );
}
