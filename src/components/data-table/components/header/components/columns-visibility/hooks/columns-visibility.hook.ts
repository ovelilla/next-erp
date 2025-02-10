// Types
import type {
  ColumnsVisibilityHookProps,
  ColumnsVisibilityHookReturn,
} from "./types/columns-visibility.hook.types";
// Handlers
import { ColumnsVisibilityHandlers } from "../handlers/columns-visibility.handlers";

const ColumnsVisibilityHook = <TData>({
  table,
}: ColumnsVisibilityHookProps<TData>): ColumnsVisibilityHookReturn => {
  const { handleCheckeChange } = ColumnsVisibilityHandlers();

  return {
    handleCheckeChange,
  };
};

export { ColumnsVisibilityHook };
