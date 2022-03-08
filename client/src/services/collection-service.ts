import axios, { AxiosInstance } from 'axios';
import CollectionData from 'types/collection-data';
import Collection from '../types/collection';
import AuthService from './auth-service';

const CollectionService = new (class CollectionService {
  private requester: AxiosInstance;

  static validateToken() {
    const token = AuthService.getToken();
    if (!token) {
      throw new Error('Authorization token not found');
    }

    return token;
  }

  public constructor() {
    this.requester = axios.create({
      baseURL: 'http://localhost:5000/api',
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // eslint-disable-next-line max-len
  public createCollection = async (collectionData: CollectionData): Promise<Collection | string> => {
    const token = CollectionService.validateToken();

    const { title, description, images } = collectionData;
    console.log(title, description, images);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    // eslint-disable-next-line no-restricted-syntax
    for (const image of images) {
      formData.append('images', image); // appending every file to formdata
    }
    const { data } = await this.requester.post<Collection>('/collections', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  public getCollections = async (): Promise<Collection[]> => {
    const { data } = await this.requester.get<Collection[]>('/collections');

    return data;
  };

  public getCollection = async (id: string | undefined): Promise<Collection> => {
    const { data } = await this.requester.get<Collection>(`/collections/${id}`);

    return data;
  };
})();

export default CollectionService;
