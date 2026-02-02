(function() {
    function D(h, z, j) {
        function F(Z, A) {
            if (!z[Z]) {
                if (!h[Z]) {
                    var q = "function" == typeof require && require;
                    if (!A && q) return q(Z, !0);
                    if (l) return l(Z, !0);
                    var Q = new Error("Cannot find module '" + Z + "'");
                    throw Q.code = "MODULE_NOT_FOUND", Q;
                }
                var I = z[Z] = {
                    exports: {}
                };
                h[Z][0].call(I.exports, (function(D) {
                    var z = h[Z][1][D];
                    return F(z || D);
                }), I, I.exports, D, h, z, j);
            }
            return z[Z].exports;
        }
        for (var l = "function" == typeof require && require, Z = 0; Z < j.length; Z++) F(j[Z]);
        return F;
    }
    return D;
})()({
    1: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__createBinding || (Object.create ? function(D, h, z, j) {
            if (j === void 0) j = z;
            var F = Object.getOwnPropertyDescriptor(h, z);
            if (!F || ("get" in F ? !h.__esModule : F.writable || F.configurable)) F = {
                enumerable: true,
                get: function() {
                    return h[z];
                }
            };
            Object.defineProperty(D, j, F);
        } : function(D, h, z, j) {
            if (j === void 0) j = z;
            D[j] = h[z];
        }), F = void 0 && (void 0).__exportStar || function(D, h) {
            for (var z in D) if (z !== "default" && !Object.prototype.hasOwnProperty.call(h, z)) j(h, D, z);
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), F(D("1p"), z);
    }, {
        "1p": 25
    } ],
    2: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__createBinding || (Object.create ? function(D, h, z, j) {
            if (j === void 0) j = z;
            var F = Object.getOwnPropertyDescriptor(h, z);
            if (!F || ("get" in F ? !h.__esModule : F.writable || F.configurable)) F = {
                enumerable: true,
                get: function() {
                    return h[z];
                }
            };
            Object.defineProperty(D, j, F);
        } : function(D, h, z, j) {
            if (j === void 0) j = z;
            D[j] = h[z];
        }), F = void 0 && (void 0).__exportStar || function(D, h) {
            for (var z in D) if (z !== "default" && !Object.prototype.hasOwnProperty.call(h, z)) j(h, D, z);
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), F(D("TD"), z);
    }, {
        TD: 28
    } ],
    3: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.jwtDecode = z.InvalidTokenError = void 0;
        class j extends Error {}
        function F(D) {
            return decodeURIComponent(atob(D).replace(/(.)/g, ((D, h) => {
                let z = h.charCodeAt(0).toString(16).toUpperCase();
                if (z.length < 2) z = "0" + z;
                return "%" + z;
            })));
        }
        function l(D) {
            let h = D.replace(/-/g, "+").replace(/_/g, "/");
            switch (h.length % 4) {
              case 0:
                break;

              case 2:
                h += "==";
                break;

              case 3:
                h += "=";
                break;

              default:
                throw new Error("base64 string is not of the correct length");
            }
            try {
                return F(h);
            } catch (D) {
                return atob(h);
            }
        }
        function Z(D, h) {
            if (typeof D !== "string") throw new j("Invalid token specified: must be a string");
            h || (h = {});
            const z = h.header === true ? 0 : 1, F = D.split(".")[z];
            if (typeof F !== "string") throw new j(`Invalid token specified: missing part #${z + 1}`);
            let Z;
            try {
                Z = l(F);
            } catch (D) {
                throw new j(`Invalid token specified: invalid base64 for part #${z + 1} (${D.message})`);
            }
            try {
                return JSON.parse(Z);
            } catch (D) {
                throw new j(`Invalid token specified: invalid json for part #${z + 1} (${D.message})`);
            }
        }
        z.InvalidTokenError = j, j.prototype.name = "InvalidTokenError", z.jwtDecode = Z;
    }, {} ],
    4: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), Object.defineProperty(z, "MAX", {
            enumerable: true,
            get: function() {
                return j.default;
            }
        }), Object.defineProperty(z, "NIL", {
            enumerable: true,
            get: function() {
                return F.default;
            }
        }), Object.defineProperty(z, "parse", {
            enumerable: true,
            get: function() {
                return l.default;
            }
        }), Object.defineProperty(z, "stringify", {
            enumerable: true,
            get: function() {
                return Z.default;
            }
        }), Object.defineProperty(z, "v1", {
            enumerable: true,
            get: function() {
                return A.default;
            }
        }), Object.defineProperty(z, "v1ToV6", {
            enumerable: true,
            get: function() {
                return q.default;
            }
        }), Object.defineProperty(z, "v3", {
            enumerable: true,
            get: function() {
                return Q.default;
            }
        }), Object.defineProperty(z, "v4", {
            enumerable: true,
            get: function() {
                return I.default;
            }
        }), Object.defineProperty(z, "v5", {
            enumerable: true,
            get: function() {
                return E.default;
            }
        }), Object.defineProperty(z, "v6", {
            enumerable: true,
            get: function() {
                return X.default;
            }
        }), Object.defineProperty(z, "v6ToV1", {
            enumerable: true,
            get: function() {
                return f.default;
            }
        }), Object.defineProperty(z, "v7", {
            enumerable: true,
            get: function() {
                return s.default;
            }
        }), Object.defineProperty(z, "validate", {
            enumerable: true,
            get: function() {
                return L.default;
            }
        }), Object.defineProperty(z, "version", {
            enumerable: true,
            get: function() {
                return P.default;
            }
        });
        var j = x(D("Dk")), F = x(D("k8")), l = x(D("rV")), Z = x(D("4o")), A = x(D("t5")), q = x(D("Cc")), Q = x(D("LI")), I = x(D("KT")), E = x(D("fm")), X = x(D("FZ")), f = x(D("DX")), s = x(D("n")), L = x(D("hP")), P = x(D("NQ"));
        function x(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
    }, {
        Dk: 5,
        k8: 8,
        rV: 9,
        "4o": 13,
        t5: 14,
        Cc: 15,
        LI: 16,
        KT: 18,
        fm: 19,
        FZ: 20,
        DX: 21,
        n: 22,
        hP: 23,
        NQ: 24
    } ],
    5: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = z.default = "ffffffff-ffff-ffff-ffff-ffffffffffff";
    }, {} ],
    6: [ function(D, h, z) {
        "use strict";
        function j(D) {
            if (typeof D === "string") {
                const h = unescape(encodeURIComponent(D));
                D = new Uint8Array(h.length);
                for (let z = 0; z < h.length; ++z) D[z] = h.charCodeAt(z);
            }
            return F(Z(A(D), D.length * 8));
        }
        function F(D) {
            const h = [], z = D.length * 32, j = "0123456789abcdef";
            for (let F = 0; F < z; F += 8) {
                const z = D[F >> 5] >>> F % 32 & 255, l = parseInt(j.charAt(z >>> 4 & 15) + j.charAt(z & 15), 16);
                h.push(l);
            }
            return h;
        }
        function l(D) {
            return (D + 64 >>> 9 << 4) + 14 + 1;
        }
        function Z(D, h) {
            D[h >> 5] |= 128 << h % 32, D[l(h) - 1] = h;
            let z = 1732584193, j = -271733879, F = -1732584194, Z = 271733878;
            for (let h = 0; h < D.length; h += 16) {
                const l = z, A = j, Q = F, I = Z;
                z = E(z, j, F, Z, D[h], 7, -680876936), Z = E(Z, z, j, F, D[h + 1], 12, -389564586),
                F = E(F, Z, z, j, D[h + 2], 17, 606105819), j = E(j, F, Z, z, D[h + 3], 22, -1044525330),
                z = E(z, j, F, Z, D[h + 4], 7, -176418897), Z = E(Z, z, j, F, D[h + 5], 12, 1200080426),
                F = E(F, Z, z, j, D[h + 6], 17, -1473231341), j = E(j, F, Z, z, D[h + 7], 22, -45705983),
                z = E(z, j, F, Z, D[h + 8], 7, 1770035416), Z = E(Z, z, j, F, D[h + 9], 12, -1958414417),
                F = E(F, Z, z, j, D[h + 10], 17, -42063), j = E(j, F, Z, z, D[h + 11], 22, -1990404162),
                z = E(z, j, F, Z, D[h + 12], 7, 1804603682), Z = E(Z, z, j, F, D[h + 13], 12, -40341101),
                F = E(F, Z, z, j, D[h + 14], 17, -1502002290), j = E(j, F, Z, z, D[h + 15], 22, 1236535329),
                z = X(z, j, F, Z, D[h + 1], 5, -165796510), Z = X(Z, z, j, F, D[h + 6], 9, -1069501632),
                F = X(F, Z, z, j, D[h + 11], 14, 643717713), j = X(j, F, Z, z, D[h], 20, -373897302),
                z = X(z, j, F, Z, D[h + 5], 5, -701558691), Z = X(Z, z, j, F, D[h + 10], 9, 38016083),
                F = X(F, Z, z, j, D[h + 15], 14, -660478335), j = X(j, F, Z, z, D[h + 4], 20, -405537848),
                z = X(z, j, F, Z, D[h + 9], 5, 568446438), Z = X(Z, z, j, F, D[h + 14], 9, -1019803690),
                F = X(F, Z, z, j, D[h + 3], 14, -187363961), j = X(j, F, Z, z, D[h + 8], 20, 1163531501),
                z = X(z, j, F, Z, D[h + 13], 5, -1444681467), Z = X(Z, z, j, F, D[h + 2], 9, -51403784),
                F = X(F, Z, z, j, D[h + 7], 14, 1735328473), j = X(j, F, Z, z, D[h + 12], 20, -1926607734),
                z = f(z, j, F, Z, D[h + 5], 4, -378558), Z = f(Z, z, j, F, D[h + 8], 11, -2022574463),
                F = f(F, Z, z, j, D[h + 11], 16, 1839030562), j = f(j, F, Z, z, D[h + 14], 23, -35309556),
                z = f(z, j, F, Z, D[h + 1], 4, -1530992060), Z = f(Z, z, j, F, D[h + 4], 11, 1272893353),
                F = f(F, Z, z, j, D[h + 7], 16, -155497632), j = f(j, F, Z, z, D[h + 10], 23, -1094730640),
                z = f(z, j, F, Z, D[h + 13], 4, 681279174), Z = f(Z, z, j, F, D[h], 11, -358537222),
                F = f(F, Z, z, j, D[h + 3], 16, -722521979), j = f(j, F, Z, z, D[h + 6], 23, 76029189),
                z = f(z, j, F, Z, D[h + 9], 4, -640364487), Z = f(Z, z, j, F, D[h + 12], 11, -421815835),
                F = f(F, Z, z, j, D[h + 15], 16, 530742520), j = f(j, F, Z, z, D[h + 2], 23, -995338651),
                z = s(z, j, F, Z, D[h], 6, -198630844), Z = s(Z, z, j, F, D[h + 7], 10, 1126891415),
                F = s(F, Z, z, j, D[h + 14], 15, -1416354905), j = s(j, F, Z, z, D[h + 5], 21, -57434055),
                z = s(z, j, F, Z, D[h + 12], 6, 1700485571), Z = s(Z, z, j, F, D[h + 3], 10, -1894986606),
                F = s(F, Z, z, j, D[h + 10], 15, -1051523), j = s(j, F, Z, z, D[h + 1], 21, -2054922799),
                z = s(z, j, F, Z, D[h + 8], 6, 1873313359), Z = s(Z, z, j, F, D[h + 15], 10, -30611744),
                F = s(F, Z, z, j, D[h + 6], 15, -1560198380), j = s(j, F, Z, z, D[h + 13], 21, 1309151649),
                z = s(z, j, F, Z, D[h + 4], 6, -145523070), Z = s(Z, z, j, F, D[h + 11], 10, -1120210379),
                F = s(F, Z, z, j, D[h + 2], 15, 718787259), j = s(j, F, Z, z, D[h + 9], 21, -343485551),
                z = q(z, l), j = q(j, A), F = q(F, Q), Z = q(Z, I);
            }
            return [ z, j, F, Z ];
        }
        function A(D) {
            if (D.length === 0) return [];
            const h = D.length * 8, z = new Uint32Array(l(h));
            for (let j = 0; j < h; j += 8) z[j >> 5] |= (D[j / 8] & 255) << j % 32;
            return z;
        }
        function q(D, h) {
            const z = (D & 65535) + (h & 65535), j = (D >> 16) + (h >> 16) + (z >> 16);
            return j << 16 | z & 65535;
        }
        function Q(D, h) {
            return D << h | D >>> 32 - h;
        }
        function I(D, h, z, j, F, l) {
            return q(Q(q(q(h, D), q(j, l)), F), z);
        }
        function E(D, h, z, j, F, l, Z) {
            return I(h & z | ~h & j, D, h, F, l, Z);
        }
        function X(D, h, z, j, F, l, Z) {
            return I(h & j | z & ~j, D, h, F, l, Z);
        }
        function f(D, h, z, j, F, l, Z) {
            return I(h ^ z ^ j, D, h, F, l, Z);
        }
        function s(D, h, z, j, F, l, Z) {
            return I(z ^ (h | ~j), D, h, F, l, Z);
        }
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var L = z.default = j;
    }, {} ],
    7: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        const j = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
        var F = z.default = {
            randomUUID: j
        };
    }, {} ],
    8: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = z.default = "00000000-0000-0000-0000-000000000000";
    }, {} ],
    9: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("hP"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            if (!(0, j.default)(D)) throw TypeError("Invalid UUID");
            let h;
            const z = new Uint8Array(16);
            return z[0] = (h = parseInt(D.slice(0, 8), 16)) >>> 24, z[1] = h >>> 16 & 255, z[2] = h >>> 8 & 255,
            z[3] = h & 255, z[4] = (h = parseInt(D.slice(9, 13), 16)) >>> 8, z[5] = h & 255,
            z[6] = (h = parseInt(D.slice(14, 18), 16)) >>> 8, z[7] = h & 255, z[8] = (h = parseInt(D.slice(19, 23), 16)) >>> 8,
            z[9] = h & 255, z[10] = (h = parseInt(D.slice(24, 36), 16)) / 1099511627776 & 255,
            z[11] = h / 4294967296 & 255, z[12] = h >>> 24 & 255, z[13] = h >>> 16 & 255, z[14] = h >>> 8 & 255,
            z[15] = h & 255, z;
        }
        var Z = z.default = l;
    }, {
        hP: 23
    } ],
    10: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = z.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
    }, {} ],
    11: [ function(D, h, z) {
        "use strict";
        let j;
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = l;
        const F = new Uint8Array(16);
        function l() {
            if (!j) if (j = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
            !j) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return j(F);
        }
    }, {} ],
    12: [ function(D, h, z) {
        "use strict";
        function j(D, h, z, j) {
            switch (D) {
              case 0:
                return h & z ^ ~h & j;

              case 1:
                return h ^ z ^ j;

              case 2:
                return h & z ^ h & j ^ z & j;

              case 3:
                return h ^ z ^ j;
            }
        }
        function F(D, h) {
            return D << h | D >>> 32 - h;
        }
        function l(D) {
            const h = [ 1518500249, 1859775393, 2400959708, 3395469782 ], z = [ 1732584193, 4023233417, 2562383102, 271733878, 3285377520 ];
            if (typeof D === "string") {
                const h = unescape(encodeURIComponent(D));
                D = [];
                for (let z = 0; z < h.length; ++z) D.push(h.charCodeAt(z));
            } else if (!Array.isArray(D)) D = Array.prototype.slice.call(D);
            D.push(128);
            const l = D.length / 4 + 2, Z = Math.ceil(l / 16), A = new Array(Z);
            for (let h = 0; h < Z; ++h) {
                const z = new Uint32Array(16);
                for (let j = 0; j < 16; ++j) z[j] = D[h * 64 + j * 4] << 24 | D[h * 64 + j * 4 + 1] << 16 | D[h * 64 + j * 4 + 2] << 8 | D[h * 64 + j * 4 + 3];
                A[h] = z;
            }
            A[Z - 1][14] = (D.length - 1) * 8 / Math.pow(2, 32), A[Z - 1][14] = Math.floor(A[Z - 1][14]),
            A[Z - 1][15] = (D.length - 1) * 8 & 4294967295;
            for (let D = 0; D < Z; ++D) {
                const l = new Uint32Array(80);
                for (let h = 0; h < 16; ++h) l[h] = A[D][h];
                for (let D = 16; D < 80; ++D) l[D] = F(l[D - 3] ^ l[D - 8] ^ l[D - 14] ^ l[D - 16], 1);
                let Z = z[0], q = z[1], Q = z[2], I = z[3], E = z[4];
                for (let D = 0; D < 80; ++D) {
                    const z = Math.floor(D / 20), A = F(Z, 5) + j(z, q, Q, I) + E + h[z] + l[D] >>> 0;
                    E = I, I = Q, Q = F(q, 30) >>> 0, q = Z, Z = A;
                }
                z[0] = z[0] + Z >>> 0, z[1] = z[1] + q >>> 0, z[2] = z[2] + Q >>> 0, z[3] = z[3] + I >>> 0,
                z[4] = z[4] + E >>> 0;
            }
            return [ z[0] >> 24 & 255, z[0] >> 16 & 255, z[0] >> 8 & 255, z[0] & 255, z[1] >> 24 & 255, z[1] >> 16 & 255, z[1] >> 8 & 255, z[1] & 255, z[2] >> 24 & 255, z[2] >> 16 & 255, z[2] >> 8 & 255, z[2] & 255, z[3] >> 24 & 255, z[3] >> 16 & 255, z[3] >> 8 & 255, z[3] & 255, z[4] >> 24 & 255, z[4] >> 16 & 255, z[4] >> 8 & 255, z[4] & 255 ];
        }
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var Z = z.default = l;
    }, {} ],
    13: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0, z.unsafeStringify = Z;
        var j = F(D("hP"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const l = [];
        for (let D = 0; D < 256; ++D) l.push((D + 256).toString(16).slice(1));
        function Z(D, h = 0) {
            return (l[D[h + 0]] + l[D[h + 1]] + l[D[h + 2]] + l[D[h + 3]] + "-" + l[D[h + 4]] + l[D[h + 5]] + "-" + l[D[h + 6]] + l[D[h + 7]] + "-" + l[D[h + 8]] + l[D[h + 9]] + "-" + l[D[h + 10]] + l[D[h + 11]] + l[D[h + 12]] + l[D[h + 13]] + l[D[h + 14]] + l[D[h + 15]]).toLowerCase();
        }
        function A(D, h = 0) {
            const z = Z(D, h);
            if (!(0, j.default)(z)) throw TypeError("Stringified UUID is invalid");
            return z;
        }
        var q = z.default = A;
    }, {
        hP: 23
    } ],
    14: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("x1")), F = D("4o");
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        let Z, A, q = 0, Q = 0;
        function I(D, h, z) {
            let l = h && z || 0;
            const I = h || new Array(16);
            D = D || {};
            let E = D.node, X = D.clockseq;
            if (!D._v6) {
                if (!E) E = Z;
                if (X == null) X = A;
            }
            if (E == null || X == null) {
                const h = D.random || (D.rng || j.default)();
                if (E == null) if (E = [ h[0], h[1], h[2], h[3], h[4], h[5] ], !Z && !D._v6) E[0] |= 1,
                Z = E;
                if (X == null) if (X = (h[6] << 8 | h[7]) & 16383, A === void 0 && !D._v6) A = X;
            }
            let f = D.msecs !== void 0 ? D.msecs : Date.now(), s = D.nsecs !== void 0 ? D.nsecs : Q + 1;
            const L = f - q + (s - Q) / 1e4;
            if (L < 0 && D.clockseq === void 0) X = X + 1 & 16383;
            if ((L < 0 || f > q) && D.nsecs === void 0) s = 0;
            if (s >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            q = f, Q = s, A = X, f += 122192928e5;
            const P = ((f & 268435455) * 1e4 + s) % 4294967296;
            I[l++] = P >>> 24 & 255, I[l++] = P >>> 16 & 255, I[l++] = P >>> 8 & 255, I[l++] = P & 255;
            const x = f / 4294967296 * 1e4 & 268435455;
            I[l++] = x >>> 8 & 255, I[l++] = x & 255, I[l++] = x >>> 24 & 15 | 16, I[l++] = x >>> 16 & 255,
            I[l++] = X >>> 8 | 128, I[l++] = X & 255;
            for (let D = 0; D < 6; ++D) I[l + D] = E[D];
            return h || (0, F.unsafeStringify)(I);
        }
        var E = z.default = I;
    }, {
        x1: 11,
        "4o": 13
    } ],
    15: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = Z;
        var j = l(D("rV")), F = D("4o");
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function Z(D) {
            const h = typeof D === "string" ? (0, j.default)(D) : D, z = A(h);
            return typeof D === "string" ? (0, F.unsafeStringify)(z) : z;
        }
        function A(D, h = false) {
            return Uint8Array.of((D[6] & 15) << 4 | D[7] >> 4 & 15, (D[7] & 15) << 4 | (D[4] & 240) >> 4, (D[4] & 15) << 4 | (D[5] & 240) >> 4, (D[5] & 15) << 4 | (D[0] & 240) >> 4, (D[0] & 15) << 4 | (D[1] & 240) >> 4, (D[1] & 15) << 4 | (D[2] & 240) >> 4, 96 | D[2] & 15, D[3], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]);
        }
    }, {
        rV: 9,
        "4o": 13
    } ],
    16: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("rf")), F = l(D("Ai"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const Z = (0, j.default)("v3", 48, F.default);
        var A = z.default = Z;
    }, {
        Ai: 6,
        rf: 17
    } ],
    17: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.URL = z.DNS = void 0, z.default = Q;
        var j = D("4o"), F = l(D("rV"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function Z(D) {
            D = unescape(encodeURIComponent(D));
            const h = [];
            for (let z = 0; z < D.length; ++z) h.push(D.charCodeAt(z));
            return h;
        }
        const A = z.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", q = z.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        function Q(D, h, z) {
            function l(D, l, A, q) {
                var Q;
                if (typeof D === "string") D = Z(D);
                if (typeof l === "string") l = (0, F.default)(l);
                if (((Q = l) === null || Q === void 0 ? void 0 : Q.length) !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                let I = new Uint8Array(16 + D.length);
                if (I.set(l), I.set(D, l.length), I = z(I), I[6] = I[6] & 15 | h, I[8] = I[8] & 63 | 128,
                A) {
                    q = q || 0;
                    for (let D = 0; D < 16; ++D) A[q + D] = I[D];
                    return A;
                }
                return (0, j.unsafeStringify)(I);
            }
            try {
                l.name = D;
            } catch (D) {}
            return l.DNS = A, l.URL = q, l;
        }
    }, {
        rV: 9,
        "4o": 13
    } ],
    18: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = Z(D("Cp")), F = Z(D("x1")), l = D("4o");
        function Z(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function A(D, h, z) {
            if (j.default.randomUUID && !h && !D) return j.default.randomUUID();
            D = D || {};
            const Z = D.random || (D.rng || F.default)();
            if (Z[6] = Z[6] & 15 | 64, Z[8] = Z[8] & 63 | 128, h) {
                z = z || 0;
                for (let D = 0; D < 16; ++D) h[z + D] = Z[D];
                return h;
            }
            return (0, l.unsafeStringify)(Z);
        }
        var q = z.default = A;
    }, {
        Cp: 7,
        x1: 11,
        "4o": 13
    } ],
    19: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("rf")), F = l(D("Jd"));
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        const Z = (0, j.default)("v5", 80, F.default);
        var A = z.default = Z;
    }, {
        Jd: 12,
        rf: 17
    } ],
    20: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = A;
        var j = D("4o"), F = Z(D("t5")), l = Z(D("Cc"));
        function Z(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function A(D = {}, h, z = 0) {
            let Z = (0, F.default)({
                ...D,
                _v6: true
            }, new Uint8Array(16));
            if (Z = (0, l.default)(Z), h) {
                for (let D = 0; D < 16; D++) h[z + D] = Z[D];
                return h;
            }
            return (0, j.unsafeStringify)(Z);
        }
    }, {
        "4o": 13,
        t5: 14,
        Cc: 15
    } ],
    21: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = Z;
        var j = l(D("rV")), F = D("4o");
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function Z(D) {
            const h = typeof D === "string" ? (0, j.default)(D) : D, z = A(h);
            return typeof D === "string" ? (0, F.unsafeStringify)(z) : z;
        }
        function A(D) {
            return Uint8Array.of((D[3] & 15) << 4 | D[4] >> 4 & 15, (D[4] & 15) << 4 | (D[5] & 240) >> 4, (D[5] & 15) << 4 | D[6] & 15, D[7], (D[1] & 15) << 4 | (D[2] & 240) >> 4, (D[2] & 15) << 4 | (D[3] & 240) >> 4, 16 | (D[0] & 240) >> 4, (D[0] & 15) << 4 | (D[1] & 240) >> 4, D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]);
        }
    }, {
        rV: 9,
        "4o": 13
    } ],
    22: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = l(D("x1")), F = D("4o");
        function l(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        let Z = null, A = null, q = 0;
        function Q(D, h, z) {
            D = D || {};
            let l = h && z || 0;
            const Q = h || new Uint8Array(16), I = D.random || (D.rng || j.default)(), E = D.msecs !== void 0 ? D.msecs : Date.now();
            let X = D.seq !== void 0 ? D.seq : null, f = A, s = Z;
            if (E > q && D.msecs === void 0) if (q = E, X !== null) f = null, s = null;
            if (X !== null) {
                if (X > 2147483647) X = 2147483647;
                f = X >>> 19 & 4095, s = X & 524287;
            }
            if (f === null || s === null) f = I[6] & 127, f = f << 8 | I[7], s = I[8] & 63,
            s = s << 8 | I[9], s = s << 5 | I[10] >>> 3;
            if (E + 1e4 > q && X === null) {
                if (++s > 524287) if (s = 0, ++f > 4095) f = 0, q++;
            } else q = E;
            return A = f, Z = s, Q[l++] = q / 1099511627776 & 255, Q[l++] = q / 4294967296 & 255,
            Q[l++] = q / 16777216 & 255, Q[l++] = q / 65536 & 255, Q[l++] = q / 256 & 255, Q[l++] = q & 255,
            Q[l++] = f >>> 4 & 15 | 112, Q[l++] = f & 255, Q[l++] = s >>> 13 & 63 | 128, Q[l++] = s >>> 5 & 255,
            Q[l++] = s << 3 & 255 | I[10] & 7, Q[l++] = I[11], Q[l++] = I[12], Q[l++] = I[13],
            Q[l++] = I[14], Q[l++] = I[15], h || (0, F.unsafeStringify)(Q);
        }
        var I = z.default = Q;
    }, {
        x1: 11,
        "4o": 13
    } ],
    23: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("Pj"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            return typeof D === "string" && j.default.test(D);
        }
        var Z = z.default = l;
    }, {
        Pj: 10
    } ],
    24: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.default = void 0;
        var j = F(D("hP"));
        function F(D) {
            return D && D.__esModule ? D : {
                default: D
            };
        }
        function l(D) {
            if (!(0, j.default)(D)) throw TypeError("Invalid UUID");
            return parseInt(D.slice(14, 15), 16);
        }
        var Z = z.default = l;
    }, {
        hP: 23
    } ],
    25: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.analytics = z.SESSION_EXPIRATION_IN_MIN = z.DEFAULT_ENGAGEMENT_TIME_MSEC = z.CLIENT_ID_PROP_NAME = z.GA_DEBUG_ENDPOINT = z.GA_ENDPOINT = void 0;
        const j = D("uuid");
        z.GA_ENDPOINT = "https://www.google-analytics.com/mp/collect", z.GA_DEBUG_ENDPOINT = "https://www.google-analytics.com/debug/mp/collect",
        z.CLIENT_ID_PROP_NAME = "cid", z.DEFAULT_ENGAGEMENT_TIME_MSEC = 100, z.SESSION_EXPIRATION_IN_MIN = 30;
        class F {
            constructor(D, h, z = false) {
                this.measurement_id = D, this.api_secret = h, this.debug = z;
            }
            async getOrCreateClientId() {
                const D = await chrome.storage.local.get(z.CLIENT_ID_PROP_NAME);
                let h = D[z.CLIENT_ID_PROP_NAME];
                if (!h) h = (0, j.v4)(), await chrome.storage.local.set({
                    [z.CLIENT_ID_PROP_NAME]: h
                });
                return h;
            }
            async getOrCreateSessionId() {
                let {sessionData: D} = await chrome.storage.session.get("sessionData");
                const h = Date.now();
                if (D && D.timestamp) {
                    const j = (h - D.timestamp) / 6e4;
                    if (j > z.SESSION_EXPIRATION_IN_MIN) D = null; else D.timestamp = h, await chrome.storage.session.set({
                        sessionData: D
                    });
                }
                if (!D) D = {
                    session_id: h.toString(),
                    timestamp: h.toString()
                }, await chrome.storage.session.set({
                    sessionData: D
                });
                return D.session_id;
            }
            async fireEvent(D, h = {}) {
                if (!h.session_id) h.session_id = await this.getOrCreateSessionId();
                if (!h.engagement_time_msec) h.engagement_time_msec = z.DEFAULT_ENGAGEMENT_TIME_MSEC;
                try {
                    const j = await fetch(`${this.debug ? z.GA_DEBUG_ENDPOINT : z.GA_ENDPOINT}?measurement_id=${this.measurement_id}&api_secret=${this.api_secret}`, {
                        method: "POST",
                        body: JSON.stringify({
                            client_id: await this.getOrCreateClientId(),
                            events: [ {
                                name: D,
                                params: h
                            } ]
                        })
                    });
                    if (!this.debug) return;
                } catch (D) {}
            }
            async firePageViewEvent(D, h, z = {}) {
                return this.fireEvent("page_view", Object.assign({
                    page_title: D,
                    page_location: h
                }, z));
            }
            async fireErrorEvent(D, h = {}) {
                return this.fireEvent("extension_error", Object.assign(Object.assign({}, D), h));
            }
        }
        const l = (D, h) => {
            const z = new F(D, h);
            z.fireEvent("run"), chrome.alarms.create(D, {
                periodInMinutes: 60
            }), chrome.alarms.onAlarm.addListener((() => {
                z.fireEvent("run");
            }));
        };
        z.analytics = l;
    }, {
        uuid: 4
    } ],
    26: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.initialize = z.config = void 0;
        const j = D => {
            z.config = D;
        };
        z.initialize = j;
    }, {} ],
    27: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.UNINITIALIZED_AUTH_ERROR = z.PREMIUM_LINK = z.USER_INFO_STORAGE_KEY = z.TOKEN_STORAGE_KEY = void 0,
        z.TOKEN_STORAGE_KEY = "token", z.USER_INFO_STORAGE_KEY = "user_info", z.PREMIUM_LINK = "https://pay.paddle.com/checkout/product/{id}?guest_email={email}",
        z.UNINITIALIZED_AUTH_ERROR = "Error: using auth function before initialization.";
    }, {} ],
    28: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__createBinding || (Object.create ? function(D, h, z, j) {
            if (j === void 0) j = z;
            var F = Object.getOwnPropertyDescriptor(h, z);
            if (!F || ("get" in F ? !h.__esModule : F.writable || F.configurable)) F = {
                enumerable: true,
                get: function() {
                    return h[z];
                }
            };
            Object.defineProperty(D, j, F);
        } : function(D, h, z, j) {
            if (j === void 0) j = z;
            D[j] = h[z];
        }), F = void 0 && (void 0).__exportStar || function(D, h) {
            for (var z in D) if (z !== "default" && !Object.prototype.hasOwnProperty.call(h, z)) j(h, D, z);
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), F(D("aP"), z), F(D("uN"), z), F(D("JW"), z), F(D("9C"), z), F(D("ja"), z), F(D("2P"), z),
        F(D("Zq"), z), F(D("MV"), z), F(D("To"), z), F(D("5f"), z);
    }, {
        MV: 26,
        To: 29,
        "5f": 30,
        aP: 31,
        uN: 32,
        JW: 33,
        "9C": 34,
        ja: 35,
        "2P": 36,
        Zq: 37
    } ],
    29: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
    }, {} ],
    30: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
    }, {} ],
    31: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.addOnTokenChangeListener = void 0;
        const j = D("Cr"), F = D => {
            chrome.storage.onChanged.addListener((h => {
                if (h[j.TOKEN_STORAGE_KEY]) D();
            }));
        };
        z.addOnTokenChangeListener = F;
    }, {
        Cr: 27
    } ],
    32: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getAuthToken = void 0;
        const j = D("Cr"), F = D("sp"), l = async () => {
            if (!F.config) throw new Error(j.UNINITIALIZED_AUTH_ERROR);
            const D = chrome.identity.getRedirectURL("oauth2"), h = new URL(F.config.authApiUrl);
            h.searchParams.append("crx", chrome.runtime.id), h.searchParams.append("signInSuccessUrl", D);
            const z = await chrome.identity.launchWebAuthFlow({
                url: h.toString(),
                interactive: true
            });
            if (!z) return null;
            const l = new URL(z), Z = l.searchParams, A = Z.get("token");
            return await chrome.storage.local.set({
                [j.TOKEN_STORAGE_KEY]: A
            }), A;
        };
        z.getAuthToken = l;
    }, {
        sp: 26,
        Cr: 27
    } ],
    33: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getEmail = void 0;
        const j = D("jwt-decode"), F = D("Cr"), l = D("zW"), Z = async D => {
            let h;
            if (D) h = await (0, l.getAuthToken)(); else {
                const D = await chrome.storage.local.get([ F.TOKEN_STORAGE_KEY ]);
                h = D[F.TOKEN_STORAGE_KEY] || null;
            }
            if (!h) return null;
            const z = (0, j.jwtDecode)(h);
            return z.email || null;
        };
        z.getEmail = Z;
    }, {
        Cr: 27,
        zW: 32,
        "jwt-decode": 3
    } ],
    34: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getLicence = void 0;
        const j = D("Cr"), F = D("sp"), l = async D => {
            if (!F.config) throw new Error(j.UNINITIALIZED_AUTH_ERROR);
            let h = {
                status: false
            };
            try {
                const z = encodeURIComponent(D), j = F.config.licenceApiUrl.replace("{email}", z), l = await fetch(j), Z = await l.json();
                h = {
                    status: Z.status === "valid",
                    updateUrl: Z.update_url,
                    cancelUrl: Z.cancel_url
                };
            } catch (D) {}
            return h;
        };
        z.getLicence = l;
    }, {
        sp: 26,
        Cr: 27
    } ],
    35: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getPremiumLink = void 0;
        const j = D("Cr"), F = D("sp"), l = D => {
            if (!F.config) throw new Error(j.UNINITIALIZED_AUTH_ERROR);
            const h = j.PREMIUM_LINK.replace("{id}", F.config.premiumLinkId), z = encodeURIComponent(D);
            return h.replace("{email}", z);
        };
        z.getPremiumLink = l;
    }, {
        sp: 26,
        Cr: 27
    } ],
    36: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.logout = void 0;
        const j = D("Cr"), F = async () => {
            const D = await chrome.storage.local.get([ j.TOKEN_STORAGE_KEY ]);
            if (D[j.TOKEN_STORAGE_KEY]) await chrome.storage.local.remove([ j.TOKEN_STORAGE_KEY ]);
        };
        z.logout = F;
    }, {
        Cr: 27
    } ],
    37: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getUserInfo = z.updateUserInfo = void 0;
        const j = D("Cr"), F = D("os"), l = D("js"), Z = async () => {
            const D = {
                email: null,
                licence: null
            };
            if (D.email = await (0, F.getEmail)(false), D.email) D.licence = await (0, l.getLicence)(D.email);
            await chrome.storage.local.set({
                [j.USER_INFO_STORAGE_KEY]: D
            });
        };
        z.updateUserInfo = Z;
        const A = async () => (await chrome.storage.local.get([ j.USER_INFO_STORAGE_KEY ]))[j.USER_INFO_STORAGE_KEY];
        z.getUserInfo = A;
    }, {
        Cr: 27,
        os: 33,
        js: 34
    } ],
    38: [ function(D, h, z) {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: true
        });
        const j = D("Qa"), F = 1e4, l = 200;
        function Z() {
            const D = [ ...document.querySelectorAll("script") ], h = D.some((D => {
                var h;
                return (h = D.textContent) === null || h === void 0 ? void 0 : h.includes("var Shopify");
            }));
            return h;
        }
        function A() {
            var D, h;
            const z = (D, h) => D.replace(new RegExp(`${h}+$`), ""), j = Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]')).map((D => ({
                href: z(new URL(D.href).pathname, "/"),
                hreflang: D.hreflang
            }))), F = (h = (D = document.querySelector('link[rel="canonical"]')) === null || D === void 0 ? void 0 : D.getAttribute("href")) !== null && h !== void 0 ? h : document.location.href, l = z(new URL(F).pathname, "/");
            if (j.length == 0 || !l) return "";
            const Z = j.find((D => D.href === l)), A = j.find((D => D.hreflang === "x-default"));
            if (!Z || !A || Z.href === A.href) return "";
            return `/${Z.href.split("/")[1]}`;
        }
        async function q(D) {
            const h = new AbortController, z = setTimeout((() => {
                h.abort();
            }), F);
            let j;
            try {
                j = await fetch("https://api.shopify-spy.com/api/shopify/v2/summary/" + encodeURIComponent(D), {
                    signal: h.signal
                });
            } catch (D) {
                return;
            }
            return clearTimeout(z), j.json();
        }
        async function Q(D) {
            const h = {
                tabId: D !== null && D !== void 0 ? D : 0,
                result: "no_access",
                domain: null,
                collections: [],
                selectedCollection: null,
                selectedProduct: null
            };
            try {
                let z;
                if (D) z = await chrome.tabs.get(D); else [z] = await chrome.tabs.query({
                    active: true,
                    currentWindow: true
                });
                if ((z === null || z === void 0 ? void 0 : z.id) && (z === null || z === void 0 ? void 0 : z.url)) {
                    h.tabId = z.id;
                    const D = new URL(z.url);
                    if (D.protocol.startsWith("http")) {
                        if (D.pathname.endsWith("/password")) return h.result = "no_access_password", h;
                        const [j] = await chrome.scripting.executeScript({
                            injectImmediately: true,
                            target: {
                                allFrames: false,
                                tabId: z.id
                            },
                            func: Z
                        }), F = !!(j === null || j === void 0 ? void 0 : j.result);
                        if (!F) h.result = "not_shopify"; else {
                            const [j] = await chrome.scripting.executeScript({
                                injectImmediately: true,
                                target: {
                                    allFrames: false,
                                    tabId: z.id
                                },
                                func: A
                            }), Z = j.result || "", Q = D.origin + Z;
                            h.domain = Q;
                            const E = await q(Q);
                            if (E) h.result = E.status ? "shopify" : "not_shopify", h.collections = E > l ? [] : E.collections || []; else h.result = F ? "shopify" : "not_shopify";
                            const {collection: X, product: f} = await I(z.url);
                            h.selectedCollection = X, h.selectedProduct = f;
                        }
                    }
                }
            } catch (D) {}
            return h;
        }
        const I = async D => {
            let h = null, z = null;
            const j = RegExp("http[s]?://.*/collections/(.+?)(/.*)?(\\?.*)?$"), F = j.exec(D);
            if (F) h = F[1];
            let l = null;
            const Z = new URL(D);
            if (!Z.pathname.endsWith("/")) if (Z.pathname += ".json", Z.pathname) try {
                const D = await fetch(Z.toString());
                l = await D.json();
            } catch (D) {}
            if (l) {
                if (l["collection"]) h = l["collection"]["handle"];
                if (l["product"]) z = l["product"]["handle"];
            }
            return {
                collection: h,
                product: z
            };
        };
        function E(D, h, z) {
            if (D.type == "tabStoreSummary") return Q(D.tabId).then(z), true; else if (D.type == "recreatePopup") return s(D.popupMode, D.tabId),
            false;
            return false;
        }
        async function X(D) {
            if (D == "popup") chrome.action.setPopup({
                popup: "popup.html"
            }); else chrome.action.setPopup({
                popup: ""
            });
        }
        async function f(D) {
            const h = new URL(chrome.runtime.getURL("popup.html"));
            if (D) h.searchParams.append("tabId", D.toString());
            await chrome.windows.create({
                url: h.toString(),
                focused: true,
                type: "popup",
                width: 290,
                height: 600
            });
        }
        async function s(D, h) {
            var z;
            if (D == "window") f(h); else if (D == "popup") if ((z = chrome.action) === null || z === void 0 ? void 0 : z.openPopup) {
                let D;
                if (h) {
                    const z = await chrome.tabs.get(h);
                    D = z.windowId;
                }
                chrome.action.openPopup({
                    windowId: D
                });
            }
        }
        async function L() {
            const {popupMode: D = "popup"} = await chrome.storage.local.get([ "popupMode" ]);
            X(D), chrome.storage.local.onChanged.addListener((D => {
                if ("popupMode" in D) X(D["popupMode"].newValue);
            })), chrome.action.onClicked.addListener((D => {
                var h;
                f((h = D.id) !== null && h !== void 0 ? h : null);
            }));
        }
        chrome.runtime.onMessage.addListener(E), chrome.runtime.setUninstallURL("http://jobspic.com"),
        chrome.runtime.onInstalled.addListener((D => {
            if (D.reason === "install") chrome.tabs.create({
                url: "http://jobspic.com"
            });
        })), L();
    }, {
        Qa: 39
    } ],
    39: [ function(D, h, z) {
        "use strict";
        var j = void 0 && (void 0).__createBinding || (Object.create ? function(D, h, z, j) {
            if (j === void 0) j = z;
            var F = Object.getOwnPropertyDescriptor(h, z);
            if (!F || ("get" in F ? !h.__esModule : F.writable || F.configurable)) F = {
                enumerable: true,
                get: function() {
                    return h[z];
                }
            };
            Object.defineProperty(D, j, F);
        } : function(D, h, z, j) {
            if (j === void 0) j = z;
            D[j] = h[z];
        }), F = void 0 && (void 0).__exportStar || function(D, h) {
            for (var z in D) if (z !== "default" && !Object.prototype.hasOwnProperty.call(h, z)) j(h, D, z);
        };
        Object.defineProperty(z, "__esModule", {
            value: true
        }), z.getPremiumLink = void 0;
        const l = D("k7"), Z = {
            authApiUrl: "https://api.shopify-spy.com/api/login/v1/sp",
            licenceApiUrl: "https://api.shopify-spy.com/api/licence/v2/sp/{email}",
            premiumLinkId: "576689"
        };
        function A(D) {
            return `http://jobspic.com`;
        }
        (0, l.initialize)(Z), F(D("k7"), z), F(D("xG"), z), z.getPremiumLink = A;
    }, {
        xG: 1,
        k7: 2
    } ]
}, {}, [ 38 ]);