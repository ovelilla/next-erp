// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Types
import type { RowActionsProps } from "./types/row-actions.component.types";
// Icons
import { Ellipsis } from "lucide-react";

function RowActions<TData>({ actions, button, row }: RowActionsProps<TData>) {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label={button.ariaLabel}
            className="h-8 w-8 p-0"
            variant="ghost"
          >
            {button.icon ? (
              <button.icon className="h-4 w-4" />
            ) : (
              <Ellipsis className="h-4 w-4" />
            )}
            {button.label && <span>{button.label}</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {actions.map(({ icon: Icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={() => onClick(row.original)}>
              {Icon && <Icon className="h-4 w-4" />}
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { RowActions };
