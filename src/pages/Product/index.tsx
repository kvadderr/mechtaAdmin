import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Product } from '../../@types/ententy/Product';
import { useAppSelector } from '../../store/storeHooks';
import { selectProductList } from '../../store/slices/productSlice';
import { selectCategoriesList } from '../../store/slices/categoriesSlice';


const ProductPage = () => {

  const products = useAppSelector(selectProductList);

  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Категория',
      key: 'category.name',
      render: (_, record) => record.category.name,
    },
    {
      title: 'Склад',
      dataIndex: 'bonus',
      key: 'bonus',
    },
    {
      title: 'Акция',
      dataIndex: 'bonus',
      key: 'bonus',
    }
  ];

  return (
    <Table columns={columns} dataSource={products} />
  )
}

export default ProductPage