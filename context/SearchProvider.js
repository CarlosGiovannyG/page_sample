import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const router = useRouter();
  const [isLocation, setIsLocation] = useState("");
  const [typeSearch, setTypeSearch] = useState("");
  const [typeProperty, setTypeProperty] = useState("");
  const [motive, setMotive] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [coordenadas, setCoordenadas] = useState([]);
  const { asPath } = router;

  useEffect(() => {
    if (asPath === "/") {
      setTypeProperty("");
      setMotive("");
      setTypeSearch("");
      setCategorySearch('')
      setInputSearch('')
    }
    setIsLocation(asPath);
  }, [asPath]);

  const typePropertyHandler = (value) => {
    setTypeProperty(value);
    router.push(`/${value.toLowerCase()}`);
  };
  const motiveHandler = (value) => {
    setMotive(value);
    if (!typeProperty) {
      router.push(`/casas/${value.toLowerCase()}`);
      return;
    } else {
      router.push(`/${typeProperty.toLowerCase()}/${value.toLowerCase()}`);
    }
  };

  const typeSearchHandler = (value) => {
    setTypeSearch(value);
    if (!typeProperty || motive) {
      router.push(`/casas/comprar/${value.toLowerCase()}`);
      return;
    } else {
      router.push(
        `/${typeProperty.toLowerCase()}/${motive.toLowerCase()}/${value.toLowerCase()}`
      );
    }
  };

  const submitHandler = (data) => {
    let result = [];
    if (!data?.length || !inputSearch) {
      result = data;
    }else{
      result = data.filter(
        (dato) =>
          dato.city.toLowerCase().replace(/\s+/g, "") ===
          inputSearch.toLowerCase().replace(/\s+/g, "") ||
          dato.postalCode === Number(inputSearch) ||
          dato.geo_county.toLowerCase().replace(/\s+/g, "") ===
          inputSearch.toLowerCase().replace(/\s+/g, "")
      );

    }
    return result;
  };

  const contextValue = {
    typeSearch,
    setCategorySearch,
    categorySearch,
    setTypeSearch,
    submitHandler,
    isLocation,
    motive,
    typeProperty,
    setTypeProperty,
    typePropertyHandler,
    motiveHandler,
    typeSearchHandler,
    coordenadas,
    setCoordenadas,
    setInputSearch,
    inputSearch,
    submitHandler,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
