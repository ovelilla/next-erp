// Components
import { RowActions } from "@/components/data-table/components/row-actions/row-actions.component";
import { SelectAllCheckbox } from "@/components/data-table/components/select-all-checkbox/select-all-checkbox.component";
import { SelectRowCheckbox } from "@/components/data-table/components/select-row-checkbox/select-row-checkbox.component";
import { ColumnSorter } from "@/components/data-table/components/column-sorter/column-sorter.component";
// Icons
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
// Types
import type {
  GetColumnsConfigProps,
  GetColumnsConfigReturn,
  GetMultipleSelectActionsProps,
  GetMultipleSelectActionsReturn,
} from "./types/artists.hook.utils.types";

function getColumnsConfig<TData>({
  handleDelete,
  handleEdit,
}: GetColumnsConfigProps<TData>): GetColumnsConfigReturn<TData> {
  return [
    {
      id: "selection",
      cell: ({ row }) => <SelectRowCheckbox row={row} />,
      header: ({ table }) => <SelectAllCheckbox table={table} />,
    },
    {
      accessorKey: "name",
      header: ({ column }) => <ColumnSorter column={column} label="Nombre" />,
      meta: "Nombre",
    },
    {
      header: "Acciones",
      id: "actions",
      cell: ({ row }) => (
        <RowActions
          row={row}
          button={{
            ariaLabel: "Abrir menú de acciones",
            icon: Ellipsis,
          }}
          actions={[
            { label: "Editar", onClick: handleEdit, icon: SquarePen },
            { label: "Eliminar", onClick: handleDelete, icon: Trash2 },
          ]}
        />
      ),
    },
  ];
}

function getMultipleSelectActions<TData>({
  handleDeleteMultiple,
}: GetMultipleSelectActionsProps<TData>): GetMultipleSelectActionsReturn<TData> {
  return [{ icon: Trash2, label: "Eliminar", onClick: handleDeleteMultiple }];
}

export { getColumnsConfig, getMultipleSelectActions };
