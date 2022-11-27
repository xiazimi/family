
import { useState } from 'react';
import { Input, Spin} from 'antd';
import styles from  './index.less';
import { useAsyncEffect } from 'ahooks';
import fetch from '@/fetch';
import apis from '@/apis';

export default function HomePage() {
  const [curVal, setCurVal] = useState('邱念');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  useAsyncEffect(async () => {
    try {
      if(!curVal) {
        return;
      }
      setLoading(true)
      const { data } = await fetch({api: apis.getTest, params: { name: curVal }})
      setName(data)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, [curVal])

  console.log({name});
  
  
  return (
    <div>
      <Spin spinning={loading}>
        <div>{name}----</div>
      </Spin>
     <div className={styles.ipWrap}>
      <Input  onBlur={(e) => setCurVal(e.target.value)}/>
     </div>
    </div>
  );
}
