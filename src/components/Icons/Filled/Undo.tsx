
import Undo from "../../../assets/filled/Undo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UndoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Undo data-testid="UndoIcon" className={classes} />
  );
}
