import cx from 'classnames';

import { Input } from "../Input";
import { LabelInputProps } from "../../types/inputProps";

const textClasses = "text-input-focused text-sm"

export const LabelInput: React.FC<LabelInputProps> = ({ label, caption, vertical, ...rest }) => {
  return (
    <div className={!vertical ? "flex gap-3" : ''}>
      {label && <span data-testid="nebula-input-label" className={cx(textClasses, { 'mt-2.5': !vertical })}>{label}</span>}
      <div className="flex-1">
        <Input {...rest} />
        {caption && <span data-testid="nebula-input-caption" className={textClasses}>{caption}</span>}
      </div>
    </div>
  )
}
