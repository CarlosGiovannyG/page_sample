import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const router = useRouter();
  const [isLocation, setIsLocation] = useState("");
  const [location, setLocation] = useState("");
  const [typeSearch, setTypeSearch] = useState("Usados");
  const [typeProperty, setTypeProperty] = useState("Casas");
  const [motive, setMotive] = useState("Comprar");
  const [categorySearch, setCategorySearch] = useState("Ciudad");
  const [citySearch, setCitySearch] = useState("Miami");
  const { pathname } = router;

  useEffect(() => {
    setIsLocation(pathname);
  }, [pathname]);

  const typePropertyHandler =(value)=>{
    setTypeProperty(value)
    router.push(`/${value.toLowerCase()}`);

  }

 const motiveHandler =(value)=>{
  setMotive(value)
   router.push(`/${typeProperty.toLowerCase()}/${value.toLowerCase()}`);
   
  }
  
  const typeSearchHandler=(value)=>{
    setTypeSearch(value)
    router.push(`/${typeProperty.toLowerCase()}/${motive.toLowerCase()}/${value.toLowerCase()}`);
 }

  const submitHandler = (e) => {
    e.preventDefault();
location.toLowerCase()
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
    setTypeSearch,
    submitHandler,
    setCitySearch,
    isLocation,
    motive,
    setMotive,
    typeProperty,
    setTypeProperty,
    typePropertyHandler,
    motiveHandler,
    typeSearchHandler
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
