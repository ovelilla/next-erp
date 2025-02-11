// Vendors
import type { Table } from "@tanstack/react-table";

type FooterProps<TData> = {
  multipleSelectActions: {
    label: string;
    icon: React.JSX.Element;
    onClick: (selectedRows: TData[]) => void;
  }[];
  table: Table<TData>;
};

export type { FooterProps };
