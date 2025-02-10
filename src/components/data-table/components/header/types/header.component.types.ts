import type { Dispatch, SetStateAction } from "react";
import type { ColumnDef, Table, VisibilityState } from "@tanstack/react-table";

type HeaderHookProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialColumnVisibility: VisibilityState;
};

type HeaderProps<TData> = {
  globalFilter: string;
  onCreate: () => void;
  setGlobalFilter: Dispatch<SetStateAction<string>>;
  table: Table<TData>;
};

export type { HeaderProps };
