import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile mt-20 bg-slate-400">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-4">
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to='/dashboard/add-product'>Add Product</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard/add-admin'>Add Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
