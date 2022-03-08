import axios, { AxiosError, AxiosInstance } from 'axios';
import ErrorResponse from 'types/error-response';
import WatchData from 'types/watch-data';
import Watch from '../types/watch';
import AuthService from './auth-service';

const ProductService = new (class ProductService {
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

  public getProducts = async (): Promise<Watch[]> => {
    const { data } = await this.requester.get<Watch[]>('/products');
    return data;
  };

  public createProduct = async (productData: WatchData): Promise<Watch | string> => {
    const token = ProductService.validateToken();

    const {
      brand,
      title,
      descriptionShort,
      collectionName,
      specification,
      description,
      movement,
      price,
      images,
      sex,
    } = productData;

    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('title', title);
    formData.append('descriptionShort', descriptionShort);
    formData.append('collectionName', collectionName);
    formData.append('specification', specification);
    formData.append('description', description);
    formData.append('movement', movement);
    formData.append('sex', sex);
    formData.append('price', String(price));
    // eslint-disable-next-line no-restricted-syntax
    for (const image of images) {
      formData.append('images', image); // appending every file to formdata
    }

    const { data } = await this.requester.post<Watch>('/products', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  public getProduct = async (id?: string): Promise<Watch> => {
    const { data } = await this.requester.get<Watch>(`/products/${id}`);

    return data;
  };

  public updateProduct = async (data: Omit<WatchData, 'images'>): Promise<Watch> => {
    const token = ProductService.validateToken();
    const { id, ...body } = data;

    const response = await this.requester.patch<Watch>(`/products/${data.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  public deleteProduct = async (id: string): Promise<Watch | string> => {
    const token = ProductService.validateToken();
    console.log('Deleting...');
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<Watch>(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<ErrorResponse>;
        if (axiosError.response) {
          return axiosError.response.data.message;
        }
      }
      if (error instanceof Error) return error.message;
      return error as any as string;
    }
  };

  public getMenProducts = async (): Promise<Watch[]> => {
    const { data } = await this.requester.get<Watch[]>('/products/mens');

    return data;
  };

  public getWomenProducts = async (): Promise<Watch[]> => {
    const { data } = await this.requester.get<Watch[]>('/products/womens');

    return data;
  };
})();

export default ProductService;
