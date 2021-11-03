import Backend from "./backend";


class SubscribeAPI {
  constructor(){

  }

  static postSubscriptionConfirmation({email:email}){
    return Backend.post("/subscribe",{email})
  }

  static postConfirmSubsription({objectID:objectID}){
    return Backend.post("/subscribe/:id",{},{params:{id:objectID}})
  }

}

export default SubscribeAPI