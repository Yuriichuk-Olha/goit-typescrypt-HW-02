export interface Hit{
    url:string;
    id:number;
    title:string;
    //total: number;
    //totalHits:number;
    webformatURL:string;
    largeImageURL:string;
  }

  export interface APIType {
    hits:Hit[];
    totalHits:number;
    total:number;
}