import React from 'react';
import { useAdminUsers } from '../../hooks/useAdminUsers';
import UserList from './UserList';

export default function UserManagement() {
  const { users, loading, error, updateUserRole } = useAdminUsers();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">User Management</h2>
      <UserList
        users={users}
        loading={loading}
        error={error}
        onUpdateRole={updateUserRole}
      />
    </div>
  );
}