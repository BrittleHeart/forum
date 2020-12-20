import { genSalt, hash } from 'bcrypt';

/**
 * Hashes the passed password data
 *
 * @param {string} password
 * @returns Promise<string | undefined>
 */
export async function hashPassword(
  password: string,
): Promise<string | undefined> {
  const salt: string | number = await genSalt(10);
  if (!salt) return undefined;

  return await hash(password, salt);
}
