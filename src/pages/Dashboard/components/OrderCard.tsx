import React from 'react';
import { Order } from '../../../types/database';
import { formatDate } from '../../../utils/date';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Order #{order.id.slice(0, 8)}</p>
          <p className="mt-1 text-sm text-gray-500">{formatDate(order.created_at)}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-900">${order.total_amount.toFixed(2)}</p>
          <p className="mt-1 text-sm text-gray-500 capitalize">{order.status}</p>
        </div>
      </div>
    </div>
  );
}