import axios, { AxiosError, AxiosInstance } from 'axios';
import ErrorResponse from 'types/error-response';
import Order from 'types/order';
import OrderData from 'types/order-data';
import PaginatedOrder from 'types/paginated-orders';
import AuthService from './auth-service';

const OrderService = new (class OrderService {
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

  public createOrder = async (orderData: OrderData): Promise<Order | string> => {
    const { data } = await this.requester.post<Order>('/orders', orderData);

    return data;
  };

  public getOrders = async (page: number, limit: number, order: number)
  : Promise<PaginatedOrder> => {
    const { data } = await this.requester.get<PaginatedOrder>('/orders', { params: { page, limit, order } });
    return data;
  };

  public getOrder = async (id?: string): Promise<Order> => {
    const { data } = await this.requester.get<Order>(`/orders/${id}`);

    return data;
  };

  public updateOrder = async (data: OrderData): Promise<Order> => {
    const token = OrderService.validateToken();
    const { id, ...body } = data;

    const response = await this.requester.patch<Order>(`/orders/${data.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  public deleteOrder = async (id: string): Promise<Order | string> => {
    const token = OrderService.validateToken();
    console.log('Deleting...');
    if (!token) return 'You are not authorized';
    try {
      const { data } = await this.requester.delete<Order>(`/orders/${id}`, {
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
})();

export default OrderService;
