import { pbkdf2, randomBytes } from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(pbkdf2);
const randomBytesAsync = promisify(randomBytes);

export const generateSalt = async () => {
  const bytes = await randomBytesAsync(64);

  return bytes.toString('base64');
};

export const hashPassword = async (password: string, salt: string) => {
  const hash = await pbkdf2Async(password, salt, 10, 64, 'sha512');

  return hash.toString('base64');
};
