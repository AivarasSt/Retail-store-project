import axios, { AxiosInstance } from 'axios';
import BrandData from 'types/brand-data';
import Brand from '../types/brand';
import AuthService from './auth-service';

const BrandService = new (class BrandService {
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

  public createBrand = async (brandData: BrandData): Promise<Brand | string> => {
    const token = BrandService.validateToken();

    const { title, images } = brandData;

    const formData = new FormData();
    formData.append('title', title);
    // eslint-disable-next-line no-restricted-syntax
    for (const image of images) {
      formData.append('images', image); // appending every file to formdata
    }
    const { data } = await this.requester.post<Brand>('/brands', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('va turek:', data);

    return data;
  };

  public getBrands = async (): Promise<Brand[]> => {
    const { data } = await this.requester.get<Brand[]>('/brands');

    return data;
  };
})();

export default BrandService;
