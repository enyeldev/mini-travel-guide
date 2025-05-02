export type Place = {
  name: string;
  shortAddress: string;
  mainImage: string;
  modalInfo: ModalPlacesInfo;
  colSpan: string;
};

type ModalPlacesInfo = {
  images: string[];
  shortDescription: string;
};
