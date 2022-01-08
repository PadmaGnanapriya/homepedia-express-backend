/**
 *
 * @param {any} error
 * @param {any} message
 * @param {any} data
 * @returns {{status: string}}
 */
export function createErrorResponse(error: any) {
  const json: any = {
    status: 'error',
    message: 'Internal server error: ' + error
  };
  return json;
}

/**
 *
 * @returns {Function}
 */
export default function errorHandler() {
  return (err: any, req: any, res: any, next: any) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).send(createErrorResponse(err));
  };
}
