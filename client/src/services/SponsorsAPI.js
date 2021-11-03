import Backend from "./backend";


class SponsorsAPI {
  constructor(){

  }

  static getSponsors(){
    return Backend.get("/sponsors")
  }

}

export default SponsorsAPI