
import PenTool2 from "../../../assets/filled/PenTool2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenTool2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PenTool2} data-testid="PenTool2Icon" className={classes} />
  );
}
