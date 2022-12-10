import { Link, Outlet } from 'umi';
import { ConfigProvider } from 'antd';

export default function Layout() {
  return (
    <ConfigProvider>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
      </ul>
      <Outlet />
    </ConfigProvider>
  );
}
