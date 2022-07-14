
import Html5 from "../../../assets/filled/Html5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Html5Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Html5} data-testid="Html5Icon" className={classes} />
  );
}
