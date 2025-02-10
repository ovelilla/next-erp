import type { ColumnDef, VisibilityState } from "@tanstack/react-table";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  initialColumnVisibility: VisibilityState;
  multipleSelectActions: {
    label: string;
    icon: React.JSX.Element;
    onClick: (selectedRows: TData[]) => void;
  }[];
  onCreate: () => void;
};

export type { DataTableProps };
