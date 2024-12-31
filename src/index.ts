import { ExtensionContext } from "@foxglove/studio";
import { initParamsPanel } from "./ExamplePanel";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: "Custom Parameters Extension", initPanel: initParamsPanel });
}


