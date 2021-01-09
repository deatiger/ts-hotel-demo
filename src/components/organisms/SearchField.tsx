import React, {FC, useState} from 'react';
import flex from 'styles/utility/flex.module.scss';
import {SearchButton, TextInput} from "components/atoms";
import {useStringChangeEvent} from "lib/customHooks";
import {searchHotels} from "lib/hotels";
import {Hotels} from "types/hotels";

interface Props {
  handleHotels: (fetchedHotels: Hotels) => void
}

const SearchField: FC<Props> = (props) => {
  const {handleHotels} = props

  const [keyword, setKeyword] = useState<string>("")
  const handleKeyword = useStringChangeEvent(setKeyword)

  return (
    <div className={flex.flex__row_center}>
      <TextInput
        onChange={handleKeyword}
        value={keyword}
        type={"text"}
      />
      <SearchButton
        label={"Search"}
        onClick={async () => {
          const hotels = await searchHotels(keyword)
          handleHotels([...hotels])
        }}
      />
    </div>
  );
};

export default SearchField;