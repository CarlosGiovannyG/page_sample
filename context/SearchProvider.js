import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const router = useRouter();
  const [isLocation, setIsLocation] = useState("");
  const [location, setLocation] = useState("");
  const [typeSearch, setTypeSearch] = useState("");
  const [typeProperty, setTypeProperty] = useState("");
  const [motive, setMotive] = useState("");
  const [categorySearch, setCategorySearch] = useState("Ciudad");
  const [citySearch, setCitySearch] = useState("Miami");
  const [isSearch, setIsSearch] = useState(false);
  const { asPath } = router;

  useEffect(() => {
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
      router.push(`/casas/comprar/${value.toLowerCase()}`)
      return
    } else {
      router.push(
        `/${typeProperty.toLowerCase()}/${motive.toLowerCase()}/${value.toLowerCase()}`
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSearch(true);
    setTimeout(() => {
      setIsSearch(false);
    }, 5000);
  };

  const contextValue = {
    typeSearch,
    setCategorySearch,
    categorySearch,
    citySearch,
    setTypeSearch,
    submitHandler,
    setCitySearch,
    isLocation,
    motive,
    typeProperty,
    setTypeProperty,
    typePropertyHandler,
    motiveHandler,
    typeSearchHandler,
    isSearch,
    setIsSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
