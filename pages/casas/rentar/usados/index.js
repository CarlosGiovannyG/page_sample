import { useSelector } from "react-redux";
import { Houses, Layout } from "../../../../components";
import { houseNews } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";

const Usados = () => {
  const { loading, data } = useSelector((state) => state.houseNews);

  return (
    <Layout>
      <Houses title='Casas en renta usadas' data={data} loading={loading} />
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
