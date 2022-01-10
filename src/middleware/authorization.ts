// import UnauthorizedException from '../exceptions/UnauthorizedException';
// import { getUserRole, getUserId } from '../utils/contextUtils';
// import { PERMISSION_TYPES } from '../constants/CommonConstants';
import {createErrorResponse} from "./errorHandler";

export const PERMISSION_TYPES = {
  ADMINISTRATOR: 'Administrator',
  VIEWER: 'Viewer',
  SERVICE_SUPPLIER: 'ServiceSupplier',
  ANY: 'Any'
};

/**
 * @param {any} permittedRoles
 * @returns {Function}
 */
export default function authorization(
  permittedRoles: string[],
) {
  return async (req:any, res:any, next:any) => {
    const userRole = req.headers.authorization.split(' ')[1]
    if (userRole) {
      if (permittedRoles.includes(PERMISSION_TYPES.ANY) || permittedRoles.includes(userRole)) {
        return next();
      }
    }

    return res.status(403).send(createErrorResponse('User is not authorized to perform this action'));
  };
}
