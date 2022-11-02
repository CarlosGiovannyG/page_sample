import { useSelector } from "react-redux";
import { Houses, Layout } from "../../../../components";
import { useSearch } from "../../../../context";
import { houseNews } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";

const Usados = () => {
  const { loading, data } = useSelector((state) => state.houseNews);
  const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
  return (
    <Layout>
      <Houses title='Casas en renta usadas' data={dataShow} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(houseNews(req));
    }
);

export default Usados;
