// Components
import { Checkbox } from "@/components/ui/checkbox";
// Types
import type { SelectionRowProps } from "./types/selection-row.component.types";

function SelectionRow<TData>({ row }: SelectionRowProps<TData>) {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Seleccionar fila"
    />
  );
}

export { SelectionRow };
