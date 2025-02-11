"use client";
// Components
import { Body } from "./components/body/body.component";
import { Footer } from "./components/footer/footer.component";
import { Header } from "./components/header/header.component";
// Hooks
import DataTableHook from "./hooks/data-table.hook";
// Types
import type { DataTableProps } from "./types/data-table.component.types";

const DataTable = <TData, TValue>({
  columns,
  data,
  initialColumnVisibility,
  multipleSelectActions,
  onCreateRecord,
}: DataTableProps<TData, TValue>) => {
  const { globalFilter, setGlobalFilter, table } = DataTableHook({
    columns,
    initialColumnVisibility,
    data,
  });

  return (
    <div className="flex w-full flex-1 flex-col gap-4">
      <Header
        {...{
          globalFilter,
          onCreateRecord,
          setGlobalFilter,
          table,
        }}
      />
      <Body {...{ columns, table }} />
      <Footer {...{ multipleSelectActions, table }} />
    </div>
  );
};

export { DataTable };
