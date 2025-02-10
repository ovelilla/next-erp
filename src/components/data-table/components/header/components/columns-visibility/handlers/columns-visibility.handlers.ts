// Types
import type {
  ColumnsVisibilityHandlersReturn,
  CheckedChangeHandlerProps,
} from "./types/columns-visibility.handlers.types";

const checkedChangeHandler = <TData>({
  checked,
  column,
}: CheckedChangeHandlerProps<TData>): void => {
  column.toggleVisibility(!!checked);
};

const ColumnsVisibilityHandlers = <
  TData,
>(): ColumnsVisibilityHandlersReturn<TData> => {
  return {
    handleCheckedChange: ({
      checked,
      column,
    }: CheckedChangeHandlerProps<TData>) =>
      checkedChangeHandler({
        checked,
        column,
      }),
  };
};

export { ColumnsVisibilityHandlers };
