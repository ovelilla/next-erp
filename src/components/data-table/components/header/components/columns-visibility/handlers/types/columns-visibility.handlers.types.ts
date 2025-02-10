// Vendors
import type { Column } from "@tanstack/react-table";

type CheckedChangeHandlerProps<TData> = {
  checked: boolean;
  column: Column<TData>;
};

type ColumnsVisibilityHandlersReturn<TData> = {
  handleCheckedChange: ({
    checked,
    column,
  }: CheckedChangeHandlerProps<TData>) => void;
};

export type { CheckedChangeHandlerProps, ColumnsVisibilityHandlersReturn };
