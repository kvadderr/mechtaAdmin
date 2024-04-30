import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { menuItems } from '../constsnts/menuItems';
import { useGetCategoriesQuery } from '../api/categoriesApi';
import { useGetUsersQuery } from '../api/userApi';
import { useGetProductsQuery } from '../api/productApi';
import { useGetOrdersQuery } from '../api/orderApi';


type Props = {
  children: React.ReactNode
}

const { Content, Footer, Sider } = Layout;

const PrivateLayout = ({ children }: Props) => {

  const navigate = useNavigate();
  useGetCategoriesQuery();
  useGetUsersQuery();
  useGetProductsQuery();
  useGetOrdersQuery();
  
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  const onClick = (item: any) => {
    navigate(item.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '48px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Sider style={{ background: colorBgContainer }} width={250}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={menuItems}
              onClick={onClick}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>{children}</Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2024 Mechta Admin Panel</Footer>
    </Layout>
  )
}

export default PrivateLayout