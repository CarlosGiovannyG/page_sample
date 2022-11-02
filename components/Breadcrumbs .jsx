import { useRouter } from "next/router";
import React from "react";
import { useSearch } from "../context";

const Breadcrumbs = () => {
  const router = useRouter();
  const { isLocation} = useSearch();

  const location = isLocation.split("/");
  location[0] = "/";
  const result = [];
  let indicator = 0;

  for (let index = 0; index < location.length; index++) {
    result.push(
      index === 0
        ? "Home"
        : location[index][0].toUpperCase() + location[index].slice(1)
    );
    indicator = result.length - 1;
  }

  const navigationHandler = (index, newLink) => {
    const aux = isLocation.split("/");
    let pa = aux.slice(0, index);

    if (newLink === "Home") {
      router.push("/");
    } else {
      pa[0] = "";
      pa.push(newLink.toLowerCase());
      const res = pa.join("/");
      router.push(res);
    }
  };

  return (
    <div className="container-bread">
      <ul className="list-bread">
        {result.map((link, index) => (
          <>
            {"/"}
            <li
              className={
                index === indicator ? "item-bread-active" : "item-bread"
              }
              onClick={() => navigationHandler(index, link)}
              key={index}
            >
              {link}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
