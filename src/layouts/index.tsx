import { Link, Outlet } from 'umi';
import { ConfigProvider } from 'antd';

export default function Layout() {
  return (
    <ConfigProvider>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul> */}
      <Outlet />
    </ConfigProvider>
  );
}
