import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import ProductManagement from './components/ProductManagement';
import OrderManagement from './components/OrderManagement';
import UserManagement from './components/UserManagement';

export default function AdminDashboard() {
  const { user } = useAuth();

  // Check if user is admin
  const isAdmin = user?.user_metadata?.role === 'admin';

  if (!isAdmin) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
        <div className="mt-8 space-y-8">
          <ProductManagement />
          <OrderManagement />
          <UserManagement />
        </div>
      </div>
    </div>
  );
}