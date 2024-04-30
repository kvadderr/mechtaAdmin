import { UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const menuItems: MenuProps['items'] = [
  getItem('Сайт', 'sub0', <UsergroupAddOutlined />, [
    getItem('Галерея', '/galerry'),
    getItem('Главная страница', '/mainPage'),
  ]),
  getItem('Администрирование', 'sub1', <UsergroupAddOutlined />, [
    getItem('Склады', '/stock'),
    getItem('Продукты', '/products'),
    getItem('Категории', '/category'),
    getItem('Промокоды', '/promocodes')
  ]),
  getItem('Пользователи', 'sub2', <UsergroupAddOutlined />, [
    getItem('Список', '/users'),
    getItem('Заказы', '/orders'),
    getItem('Обращения', '/messages'),
  ])
];