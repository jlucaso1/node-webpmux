// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    /**
     * @param {string=} returnType
     * @param {Array=} argTypes
     * @param {Object=} opts
     */
    function cwrap(ident: any, returnType?: string | undefined, argTypes?: any[] | undefined, opts?: any | undefined): any;
    /**
     * @param {number} ptr
     * @param {string} type
     */
    function getValue(ptr: number, type?: string): any;
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
    function setValue(ptr: number, value: number, type?: string): void;
    let HEAPF32: any;
    let HEAPF64: any;
    let HEAP_DATA_VIEW: any;
    let HEAP8: any;
    let HEAPU8: any;
    let HEAP16: any;
    let HEAPU16: any;
    let HEAP32: any;
    let HEAPU32: any;
    let HEAP64: any;
    let HEAPU64: any;
}
interface WasmModule {
  _decodeRGBA(_0: number, _1: number): number;
  _decodeFree(_0: number): void;
  _allocBuffer(_0: number): number;
  _destroyBuffer(_0: number): void;
}

export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  clone(): this;
}
export interface WebPEnc extends ClassHandle {
  reset(): void;
  init(): boolean;
  setExact(_0: boolean): boolean;
  loadRGBA(_0: number, _1: number, _2: number): boolean;
  setPreset(_0: number): boolean;
  setLosslessPreset(_0: number): boolean;
  setMethod(_0: number): boolean;
  encode(): number;
  getResult(): number;
  advImageHint(_0: number): boolean;
  advTargetSize(_0: number): boolean;
  advSegments(_0: number): boolean;
  advSnsStrength(_0: number): boolean;
  advFilterStrength(_0: number): boolean;
  advFilterSharpness(_0: number): boolean;
  advFilterType(_0: number): boolean;
  advAutoFilter(_0: number): boolean;
  advAlphaCompression(_0: number): boolean;
  advAlphaFiltering(_0: number): boolean;
  advAlphaQuality(_0: number): boolean;
  advPass(_0: number): boolean;
  advShowCompressed(_0: number): boolean;
  advPreprocessing(_0: number): boolean;
  advPartitions(_0: number): boolean;
  advPartitionLimit(_0: number): boolean;
  advEmulateJpegSize(_0: number): boolean;
  advThreadLevel(_0: number): boolean;
  advLowMemory(_0: number): boolean;
  advNearLossless(_0: number): boolean;
  advUseDeltaPalette(_0: number): boolean;
  advUseSharpYUV(_0: number): boolean;
  advQMin(_0: number): boolean;
  advQMax(_0: number): boolean;
  getResultSize(): number;
  setQuality(_0: number): boolean;
  advTargetPSNR(_0: number): boolean;
}

interface EmbindModule {
  WebPEnc: {
    new(): WebPEnc;
  };
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
