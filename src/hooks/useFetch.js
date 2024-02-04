import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const fetch = async () => {
    try {
      const res = await api.get(url);
      console.log(res);
      setData(res)
    } catch (err) {
      alert("데이터 로딩 중 에러가 발생했습니다");
      console.log(err);
    }
  };

  useEffect(() => {
    if (!url) return;
    fetch();
  }, [url]);

  return data;
}