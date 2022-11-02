import { useSelector } from "react-redux";
import {  Houses, Layout } from "../../../../components";
import { useSearch } from "../../../../context";
import { houseUsed } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";


const Nuevos = () => {
 const { loading, data } = useSelector(
   (state) => state.houseUsed
 );
 const { submitHandler,categorySearch, inputSearch} = useSearch();
 const dataShow = submitHandler(data,categorySearch,inputSearch);
 return (
   <Layout>
     <Houses title='Casas en venta nuevas'  data={dataShow} loading={loading} />
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
