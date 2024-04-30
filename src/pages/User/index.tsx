import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { User } from '../../@types/ententy/User';
import { useAppSelector } from '../../store/storeHooks';
import { selectUsersList } from '../../store/slices/userSlice';


const UserPage = () => {

  const users = useAppSelector(selectUsersList);
  const columns: TableProps<User>['columns'] = [
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Почтв',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Телеграм',
      dataIndex: 'telegram',
      key: 'telegram',
    },
    {
      title: 'Бонус',
      dataIndex: 'bonus',
      key: 'bonus',
    }
  ];

  return (
    <Table columns={columns} dataSource={users} />
  )
}

export default UserPage