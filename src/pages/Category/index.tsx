import { Flex, Tree } from "antd"
import { Category } from "../../@types/ententy/Category"
import { useAppSelector } from "../../store/storeHooks"
import { selectCategoriesList } from "../../store/slices/categoriesSlice"
import type { TreeDataNode } from 'antd';
import { useEffect, useState } from "react";

const CategoryPage = () => {

  const categories = useAppSelector(selectCategoriesList);
  const [treeData, setTreeData] = useState<TreeDataNode[]>([]);
  function transformCategoriesToTreeData(categories: Category[]): TreeDataNode[] {
    return categories.map((category: Category): TreeDataNode => ({
      title: category.name,
      key: category.id,
      children: category.children && category.children.length > 0
        ? transformCategoriesToTreeData(category.children)
        : undefined
    }));
  }

  useEffect(() => {
    if (categories.length > 0) {
      const tree = transformCategoriesToTreeData(categories)
      setTreeData(tree)
    }
  }, [categories])

  return (
    <Flex gap={50}>
      <Tree treeData={treeData} />
    </Flex>
  )
}

export default CategoryPage