import crypto from 'crypto'
export const toMd5 = (cadena:string) => {
    const hash = crypto.createHash('md5')
    hash.update(cadena);
    const md5sum = hash.digest('hex');
    return md5sum;
}