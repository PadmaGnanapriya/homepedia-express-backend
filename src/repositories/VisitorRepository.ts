import VisitorModel, {Visitor} from "../models/visitor";

/**
 * recode Visitor in mongo db
 * @param visitor
 */
 const saveVisit = async (visitor: Visitor) => {
     console.log(visitor);

    return await VisitorModel.create(
      {
        isNewDevice: visitor.isNewDevice,
        firstDate: visitor.firstDate,
        latitude:visitor.latitude,
        longitude:visitor.longitude,
        deviceType:visitor.deviceType,
        platform:visitor.platform,
        appVersion:visitor.appVersion,
        createdAt: new Date(),
      }
    );
  };
  
  
export default {
    saveVisit
  }