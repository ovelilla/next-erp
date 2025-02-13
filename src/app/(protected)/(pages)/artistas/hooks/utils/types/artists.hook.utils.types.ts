// Types
import type { ColumnDef } from "@tanstack/react-table";
import type { LucideIcon } from "lucide-react";

type GetColumnsConfigProps<TData> = {
  handleDelete: (row: TData) => void;
  handleEdit: (row: TData) => void;
};

type GetColumnsConfigReturn<TData> = ColumnDef<TData>[];

type GetMultipleSelectActionsProps<TData> = {
  handleDeleteMultiple: (rows: TData[]) => void;
};

type GetMultipleSelectActionsReturn<TData> = {
  icon: LucideIcon;
  label: string;
  onClick: (rows: TData[]) => void;
}[];

export type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
};
