import CryptoJS from "crypto-js";

const DECRYPTION_KEY = CryptoJS.enc.Hex.parse(
  `${process.env.NEXT_PUBLIC_STRAPI_DEC_KEY}`,
); 

export function decryptData({ iv , ct } : { iv: string; ct: string }) {
 
  const ivWordArray = CryptoJS.enc.Base64.parse(iv);
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(ct),
  });

  // Decrypt
  const decrypted = CryptoJS.AES.decrypt(cipherParams, DECRYPTION_KEY, {
    iv: ivWordArray,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Convert back to string
  const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
    if (!decryptedString) {
    throw new Error("Decryption failed — invalid key or corrupted data");
  }
  // Return parsed object
  return JSON.parse(decryptedString);
}