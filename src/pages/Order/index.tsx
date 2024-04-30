import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Order } from '../../@types/ententy/Order';
import { useAppSelector } from '../../store/storeHooks';
import { selectOrdersList } from '../../store/slices/orderSlice';
import { OrderStatus } from '../../@types/const/OrderStatus';


const OrderPage = () => {

  const users = useAppSelector(selectOrdersList);
  const status_type = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.CANCELED:
        return "Отменен"
      case OrderStatus.SUCCESS:
        return "Успешный"
      case OrderStatus.WAITING:
        return "В ожидании"
      default:
        break;
    }
  }

  const columns: TableProps<Order>['columns'] = [
    {
      title: 'Дата',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Стоимость',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      render: (status) => status_type(status)
    },
    {
      title: 'Бонус',
      dataIndex: 'bonus',
      key: 'bonus',
    },
    {
      title: 'Промокод',
      dataIndex: 'promocode',
      key: 'promocode',
    },
    {
      title: 'Активность',
      dataIndex: '',
      key: 'x',
      render: () => <a>Delete</a>,
    },

  ];

  return (
    <Table columns={columns} dataSource={users} />
  )
}

export default OrderPage