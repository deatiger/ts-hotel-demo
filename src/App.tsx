import React, {FC, useCallback, useState} from 'react';
import {Layout} from "components/layouts";
import {SearchField} from "components/organisms";
import {Hotels} from "./types/hotels";

const App: FC = () => {
  const [hotels, setHotels] = useState<Hotels>([])

  const handleHotels = useCallback((fetchedHotels: Hotels) => {
    setHotels([...fetchedHotels])
  }, [setHotels])

  return (
    <Layout>
      <SearchField
        handleHotels={handleHotels}
      />
    </Layout>
  );
}

export default App;
