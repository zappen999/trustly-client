"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
// Path helpers
exports.readFile = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf8', function (err, data) {
    if (err)
        return reject(err);
    resolve(data);
}));
let ROOT = path.resolve(__dirname, '..', '..');
exports.root = (...args) => path.join(ROOT, ...args);
// Encrypt / Decrypt
exports.sign = function (data, key) {
    let signer = crypto.createSign('RSA-SHA1');
    signer.update(data, 'utf8');
    return signer.sign(key, 'base64');
};
exports.verify = function (data, signature, key) {
    let verifier = crypto.createVerify('RSA-SHA1');
    verifier.update(data, 'utf8');
    return verifier.verify(key, signature, 'base64');
};
exports.parseError = (err, lastRequest, lastResponse) => {
    let error = {
        lastRequest: lastRequest,
        lastResponse: lastResponse,
        trustlyError: null,
        clientError: null
    };
    if (err && err.error) {
        let tError = {
            method: err.error.error.method ? err.error.error.method : null,
            uuid: err.error.error.uuid ? err.error.error.uuid : null,
            message: err.error.message ? err.error.message : null,
            code: err.error.code ? err.error.code : null
        };
        error.trustlyError = tError;
    }
    else {
        error.clientError = err;
    }
    throw error;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWdDO0FBQ2hDLHlCQUF3QjtBQUN4Qiw2QkFBNEI7QUFFNUIsZUFBZTtBQUNGLFFBQUEsUUFBUSxHQUFHLENBQUMsSUFBWSxFQUFtQixFQUFFLENBQ3RELElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQzVCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO0lBQ3hDLElBQUksR0FBRztRQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRTNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQixDQUFDLENBQUMsQ0FDTCxDQUFBO0FBRUwsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRWpDLFFBQUEsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUE7QUFFakUsb0JBQW9CO0FBQ1AsUUFBQSxJQUFJLEdBQUcsVUFBUyxJQUFJLEVBQUUsR0FBRztJQUNsQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQzNCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRVksUUFBQSxNQUFNLEdBQUcsVUFBUyxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUc7SUFDL0MsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUM5QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUU3QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNwRCxDQUFDLENBQUE7QUFFWSxRQUFBLFVBQVUsR0FBRyxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDekQsSUFBSSxLQUFLLEdBQUc7UUFDUixXQUFXLEVBQUUsV0FBVztRQUN4QixZQUFZLEVBQUUsWUFBWTtRQUMxQixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUUsSUFBSTtLQUNwQixDQUFBO0lBRUQsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtRQUNsQixJQUFJLE1BQU0sR0FBRztZQUNULE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM5RCxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDeEQsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUNyRCxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO1NBQy9DLENBQUE7UUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQWEsQ0FBQTtLQUNyQztTQUFNO1FBQ0gsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7S0FDMUI7SUFFRCxNQUFNLEtBQUssQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9