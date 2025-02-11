import type { Column, VisibilityState } from "@tanstack/react-table";

type SortingProps<TData> = {
  className?: string;
  column: Column<TData>;
  label: string;
};

export type { SortingProps };
