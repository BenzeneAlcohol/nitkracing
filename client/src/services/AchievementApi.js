import Backend from "./backend";


class AchievementAPI {
  constructor(){

  }

  static getAchievements(){
    return Backend.get("/achievements")
  }

}

export default AchievementAPI