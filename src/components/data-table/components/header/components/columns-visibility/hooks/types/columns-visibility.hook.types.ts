// Types
import type { ColumnsVisibilityHandlersReturn } from "../../handlers/types/columns-visibility.handlers.types";
import type { Table } from "@tanstack/react-table";

type ColumnsVisibilityHookProps<TData> = {
  table: Table<TData>;
};

type ColumnsVisibilityHookReturn<TData> =
  ColumnsVisibilityHandlersReturn<TData>;

export type { ColumnsVisibilityHookProps, ColumnsVisibilityHookReturn };
