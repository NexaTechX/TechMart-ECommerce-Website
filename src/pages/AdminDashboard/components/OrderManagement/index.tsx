import React from 'react';
import { useAdminOrders } from '../../hooks/useAdminOrders';
import OrderList from './OrderList';

export default function OrderManagement() {
  const { orders, loading, error, updateOrderStatus } = useAdminOrders();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Management</h2>
      <OrderList
        orders={orders}
        loading={loading}
        error={error}
        onUpdateStatus={updateOrderStatus}
      />
    </div>
  );
}