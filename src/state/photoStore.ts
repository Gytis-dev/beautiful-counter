import { makeAutoObservable } from "mobx";

class StoreImpl {
  photos: PhotoI[] = [];
  photo: any;

  constructor() {
    makeAutoObservable(this);
  }

  getPhotos = (fetchResult: PhotoI[]) => {
    this.photos = fetchResult;
  };

  getPhoto = (ph: any) => {
    this.photo = ph;
  };
}

export const store = new StoreImpl();

export interface PhotoI {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
