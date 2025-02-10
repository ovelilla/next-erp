// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import constants from "./constants/columns-visibility.constants";
// Icons
import { SlidersHorizontal } from "lucide-react";
// Types
import type { ColumnsVisibilityProps } from "./types/columns-visibility.component.types";

function ColumnsVisibility<TData>({ table }: ColumnsVisibilityProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...constants.DROPDOWN_PROPS.TRIGGER_PROPS}>
        <Button {...constants.DROPDOWN_PROPS.BUTTON_PROPS}>
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        {...constants.DROPDOWN_PROPS.CONTENT_PROPS}
        className="w-[150px]"
      >
        <DropdownMenuLabel>{constants.DROPDOWN_PROPS.LABEL}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide(),
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              className="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}
            >
              {column.columnDef.meta}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ColumnsVisibility };
