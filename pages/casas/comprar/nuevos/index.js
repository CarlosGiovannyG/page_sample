import { useSelector } from "react-redux";
import { Houses, Layout } from "../../../../components";
import { houseUsed } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";

const Nuevos = () => {
  const { loading, data } = useSelector((state) => state.houseUsed);

  return (
    <Layout>
      <Houses title="Casas en venta nuevas" data={data} loading={loading} />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(houseUsed(req));
    }
);

export default Nuevos;
