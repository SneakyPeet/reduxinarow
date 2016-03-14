export const NETWORK_ERROR = 'NETWORK_ERROR';

export function networkError(msg) {
  return {
    type: NETWORK_ERROR,
    message: msg
  }
}
