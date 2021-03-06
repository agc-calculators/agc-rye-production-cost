/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface AgcRyeProductionCostInputs {
    'socket': string;
  }
  interface AgcRyeProductionCostInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcRyeProductionCostProgress {
    'socket': string;
  }
  interface AgcRyeProductionCostProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcRyeProductionCostResultsPlaceholder {}
  interface AgcRyeProductionCostResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcRyeProductionCostResults {
    'socket': string;
  }
  interface AgcRyeProductionCostResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcRyeProductionCost {
    'mode': "full" | "step";
    'socket': string;
    'tract': string;
    'units': any;
  }
  interface AgcRyeProductionCostAttributes extends StencilHTMLAttributes {
    'mode'?: "full" | "step";
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
    'units'?: any;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcRyeProductionCostInputs': Components.AgcRyeProductionCostInputs;
    'AgcRyeProductionCostProgress': Components.AgcRyeProductionCostProgress;
    'AgcRyeProductionCostResultsPlaceholder': Components.AgcRyeProductionCostResultsPlaceholder;
    'AgcRyeProductionCostResults': Components.AgcRyeProductionCostResults;
    'AgcRyeProductionCost': Components.AgcRyeProductionCost;
  }

  interface StencilIntrinsicElements {
    'agc-rye-production-cost-inputs': Components.AgcRyeProductionCostInputsAttributes;
    'agc-rye-production-cost-progress': Components.AgcRyeProductionCostProgressAttributes;
    'agc-rye-production-cost-results-placeholder': Components.AgcRyeProductionCostResultsPlaceholderAttributes;
    'agc-rye-production-cost-results': Components.AgcRyeProductionCostResultsAttributes;
    'agc-rye-production-cost': Components.AgcRyeProductionCostAttributes;
  }


  interface HTMLAgcRyeProductionCostInputsElement extends Components.AgcRyeProductionCostInputs, HTMLStencilElement {}
  var HTMLAgcRyeProductionCostInputsElement: {
    prototype: HTMLAgcRyeProductionCostInputsElement;
    new (): HTMLAgcRyeProductionCostInputsElement;
  };

  interface HTMLAgcRyeProductionCostProgressElement extends Components.AgcRyeProductionCostProgress, HTMLStencilElement {}
  var HTMLAgcRyeProductionCostProgressElement: {
    prototype: HTMLAgcRyeProductionCostProgressElement;
    new (): HTMLAgcRyeProductionCostProgressElement;
  };

  interface HTMLAgcRyeProductionCostResultsPlaceholderElement extends Components.AgcRyeProductionCostResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcRyeProductionCostResultsPlaceholderElement: {
    prototype: HTMLAgcRyeProductionCostResultsPlaceholderElement;
    new (): HTMLAgcRyeProductionCostResultsPlaceholderElement;
  };

  interface HTMLAgcRyeProductionCostResultsElement extends Components.AgcRyeProductionCostResults, HTMLStencilElement {}
  var HTMLAgcRyeProductionCostResultsElement: {
    prototype: HTMLAgcRyeProductionCostResultsElement;
    new (): HTMLAgcRyeProductionCostResultsElement;
  };

  interface HTMLAgcRyeProductionCostElement extends Components.AgcRyeProductionCost, HTMLStencilElement {}
  var HTMLAgcRyeProductionCostElement: {
    prototype: HTMLAgcRyeProductionCostElement;
    new (): HTMLAgcRyeProductionCostElement;
  };

  interface HTMLElementTagNameMap {
    'agc-rye-production-cost-inputs': HTMLAgcRyeProductionCostInputsElement
    'agc-rye-production-cost-progress': HTMLAgcRyeProductionCostProgressElement
    'agc-rye-production-cost-results-placeholder': HTMLAgcRyeProductionCostResultsPlaceholderElement
    'agc-rye-production-cost-results': HTMLAgcRyeProductionCostResultsElement
    'agc-rye-production-cost': HTMLAgcRyeProductionCostElement
  }

  interface ElementTagNameMap {
    'agc-rye-production-cost-inputs': HTMLAgcRyeProductionCostInputsElement;
    'agc-rye-production-cost-progress': HTMLAgcRyeProductionCostProgressElement;
    'agc-rye-production-cost-results-placeholder': HTMLAgcRyeProductionCostResultsPlaceholderElement;
    'agc-rye-production-cost-results': HTMLAgcRyeProductionCostResultsElement;
    'agc-rye-production-cost': HTMLAgcRyeProductionCostElement;
  }


}
