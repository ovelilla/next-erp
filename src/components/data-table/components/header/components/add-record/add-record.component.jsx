// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Constants
import constants from "./constants/add-record.constants";
// Icons
import { Plus } from "lucide-react";

export const AddRecord = ({ onCreate }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onCreate}
          aria-label="Añadir registro"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Añadir registro</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
