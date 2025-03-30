import React from 'react';
import { fetchData } from '../api';

const Home = () => {
  const [data, setData] = React.useState<string>('');
  
  React.useEffect(() => {
    fetchData().then((response) => setData(response.data.data));
  }, []);

  return (
    <div>
      <h1>Bienvenido a Ilusiones V1</h1>
      <p>Datos del backend: {data}</p>
    </div>
  );
};

export default Home;