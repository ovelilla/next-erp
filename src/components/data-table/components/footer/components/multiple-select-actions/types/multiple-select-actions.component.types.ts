// Vendors
import type { LucideIcon } from "lucide-react";
import type { Table } from "@tanstack/react-table";

type MultipleSelectActionsProps<TData> = {
  multipleSelectActions: {
    label: string;
    icon: LucideIcon;
    onClick: (selectedRows: TData[]) => void;
  }[];
  table: Table<TData>;
};

export type { MultipleSelectActionsProps };
