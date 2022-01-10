import {firebaseAuth} from '../utils/firebaseApp';
import {ServiceSupplierModel} from "../models/ServiceSupplier";
import {database} from "firebase-admin";
import Query = database.Query;

async function createUserAccount(user:any, role:string, status: boolean) {
  const userRecord = await firebaseAuth.createUser({
    email: user.email,
    emailVerified: false,
    password: user.password,
    displayName: `${user.firstName} ${user.lastName}`,
    disabled: !status,
  });

  await firebaseAuth.setCustomUserClaims(userRecord.uid, {role: role})
    .catch((e:any) => {
      throw e;
    });
  return userRecord;
}

async function toggleUserAccountStatus(uid:any, status: boolean) {  // activate,deactivate account sign in
  return firebaseAuth.updateUser(uid, {
    disabled: !status
  });
}

async function deleteUserAccount(uid:any) {  // activate,deactivate account sign in
  return firebaseAuth.deleteUser(uid);
}

const authService = {
  createUserAccount,
  toggleUserAccountStatus,
  deleteUserAccount
};

export default authService;