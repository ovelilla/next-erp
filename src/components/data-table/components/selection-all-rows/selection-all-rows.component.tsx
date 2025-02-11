// Components
import { Checkbox } from "@/components/ui/checkbox";
// Types
import type { SelectionAllRowsProps } from "./types/selection-all-rows.component.types";

function SelectionAllRows<TData>({ table }: SelectionAllRowsProps<TData>) {
  return (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Seleccionar todas las filas"
    />
  );
}

export { SelectionAllRows };
