import Order from 'types/order';

type PaginatedOrder = {
  fetchedOrders: Order[],
  fetchedOrderCount: number,
};

export default PaginatedOrder;
