
import { useState } from 'react';
import { Input, Spin} from 'antd';
import styles from  './index.less';
import { useAsyncEffect } from 'ahooks';
import fetch from '@/fetch';
import apis from '@/apis';
import boyanqiu01 from '@/assets/boyanqiu01.jpeg';

export default function HomePage() {
  const [curVal, setCurVal] = useState('邱念');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // useAsyncEffect(async () => {
  //   try {
  //     if(!curVal) {
  //       return;
  //     }
  //     setLoading(true)
  //     const { data } = await fetch({api: apis.getTest, params: { name: curVal }})
  //     setName(data)
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }, [curVal])
  
  return (
    <div>
      <h1>查询应用</h1>
      {/* <Spin spinning={loading}>
        <div>{name}----</div>
      </Spin> */}
      {/* <Input style={{ width: 500 }} onBlur={(e) => setCurVal(e.target.value)}/> */}
     <div className={styles.title}>邱念第一次部署自己的前端应用</div>
     <div className={styles.content}>
      <h2>我儿子邱博言的第一张照片</h2>
      <img className={styles.son} src={boyanqiu01} alt="boyanqiu01" />
     </div>
    </div>
  );
}
