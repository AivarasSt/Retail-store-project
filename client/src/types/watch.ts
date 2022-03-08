import Brand from './brand';
import Collection from './collection';

type Watch = {
  id: string;
  title: string;
  brand: Brand;
  descriptionShort: string;
  collectionName: Collection;
  images: string[];
  description: string;
  specification: string;
  movement: string;
  sex: string;
  price: number;
};

export default Watch;
