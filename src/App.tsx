import { Routes, Route } from 'react-router-dom'
import { App, Result } from "antd"
import { PrivateRoute } from "./routes/PrivateRoute"

import Stock from './pages/Stock'
import Category from './pages/Category'
import UserPage from './pages/User'
import ProductPage from './pages/Product'
import OrderPage from './pages/Order'

export default () => {
  return (
    <App style={{ height: '100%' }} notification={{ placement: 'topRight' }}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/stock' element={<Stock />} />
          <Route path='/orders' element={<OrderPage />} />
          <Route path='/category' element={<Category />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='*' element={<Result
            status="404"
            title="404"
          />} />
        </Route>
      </Routes>
    </App>
  )
}

