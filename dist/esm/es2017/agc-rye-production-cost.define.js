
// AgcRyeProductionCost: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-rye-production-cost.core.js';
import {
  AgcRyeProductionCost,
  AgcRyeProductionCostInputs,
  AgcRyeProductionCostProgress,
  AgcRyeProductionCostResults,
  AgcRyeProductionCostResultsPlaceholder
} from './agc-rye-production-cost.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcRyeProductionCost,
    AgcRyeProductionCostInputs,
    AgcRyeProductionCostProgress,
    AgcRyeProductionCostResults,
    AgcRyeProductionCostResultsPlaceholder
  ], opts);
}
