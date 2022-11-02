import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../../components";
import { useSearch } from "../../../../context";
import { apartmentNews } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";

const Nuevos = () => {
  const { loading, data } = useSelector((state) => state.apartmentNews);
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Apartments
        title="Apartamentos en venta nuevos"
        data={dataShow}
        loading={loading}
      />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(apartmentNews(req));
    }
);

export default Nuevos;
