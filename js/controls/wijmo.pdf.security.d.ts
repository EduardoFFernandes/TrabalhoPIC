/*!
    *
    * Wijmo Library 5.20202.699
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the GrapeCity Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
declare module wijmo.pdf.security {
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */
    function Buffer(arg: any, encodingOrOffset?: any, length?: any): void;
}
declare module wijmo.pdf.security {
    /**
 * Check if value is in a range group.
 * @param {number} value
 * @param {number[]} rangeGroup
 * @returns {boolean}
 */
    function inRange(value: any, rangeGroup: any): boolean;
}
declare module wijmo.pdf.security {
    const isUnassignedCodePoint: (character: any) => boolean;
    const isCommonlyMappedToNothing: (character: any) => boolean;
    const isNonASCIISpaceCharacter: (character: any) => boolean;
    const isProhibitedCharacter: (character: any) => boolean;
    const isBidirectionalRAL: (character: any) => boolean;
    const isBidirectionalL: (character: any) => boolean;
}
declare module wijmo.pdf.security {
    /**
     * SASLprep.
     * @param {string} input
     * @param {Object} opts
     * @param {boolean} opts.allowUnassigned
     * @returns {string}
     */
    function saslprep(input: any, opts?: any): any;
}
declare module wijmo.pdf.security {
    /**
* CryptoJS core components.
*/
    var CryptoJS: any;
}
declare module wijmo.pdf.security {
    class _PDFSecurity {
        static generateFileID(info?: any): any;
        static generateRandomWordArray(bytes: any): any;
        static create(document: any, options?: any): _PDFSecurity;
        private document;
        private version;
        private dictionary;
        private keyBits;
        private encryptionKey;
        constructor(document: any, options?: any);
        _setupEncryption(options: any): void;
        _setupEncryptionV1V2V4(v: any, encDict: any, options: any): void;
        _setupEncryptionV5(encDict: any, options: any): void;
        getEncryptFn(obj: any, gen: any): (buffer: any) => any;
        end(): void;
    }
}
declare module wijmo.pdf.security {
}
