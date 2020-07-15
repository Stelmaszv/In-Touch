// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
class languages{
  private assetsUrl ='assets/flags/';
  public langList = [{'img':'assets/flags/en.gif','name':'en','fullname':'english'},{'img':'assets/flags/pl.png','name':'pl','fullname':'polski'}]
  public defult   = 'en'
  public use      = 'en'
  public langs    = []
  constructor(){
    this.setLangs()
  }
  private setLangs(){
    for(const lang in this.langList){
      this.langs.push(this.langList[lang].name)
    }
  }
}
class urls{
  public portfolio = {'href':'http://piotrstelmaszv.byethost7.com/','text':'stelmaszv'}
}
class photos{
  private assetsUrl ='assets/img/';
  public  navLogo   = this.assetsUrl+'icon.png'
}
export const environment = {
  production: false,
  name:'In Touch',
  photo:new photos,
  url:new urls,
  language:new languages()
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
