import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const router = useRouter();
  const [isLocation, setIsLocation] = useState("");
  const [location, setLocation] = useState("");
  const [typeSearch, setTypeSearch] = useState("Usados");
  const [categorySearch, setCategorySearch] = useState("Ciudad");
  const [citySearch, setCitySearch] = useState("Miami");
  const { pathname } = router;

  useEffect(() => {
    setIsLocation(pathname);
  }, [pathname]);

  console.log({ router });

  const handleSubmit = (data) => {
    setCitySearch(data);
  };

  const handleClick = (dato) => {
    setTypeSearch(dato);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (location.trim()) {
      router.push(
        `/?location=${location}&guests=${guests}&category=${category}`
      );
    } else {
      router.push("/");
    }
  };

  const contextValue = {
    typeSearch,
    setCategorySearch,
    categorySearch,
    citySearch,
    handleClick,
    submitHandler,
    handleSubmit,
    isLocation,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
