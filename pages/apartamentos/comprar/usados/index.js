import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../../components";
import { useSearch } from "../../../../context";
import { apartmentUsed } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";


const Usados = () => {
 const { loading, data } = useSelector(
   (state) => state.apartmentUsed
 );
 const { submitHandler,categorySearch, inputSearch} = useSearch();
  const dataShow = submitHandler(data,categorySearch,inputSearch);
 return (
   <Layout>
     <Apartments title='Apartamentos en venta usados' data={dataShow} loading={loading} />
   </Layout>
 );
};

export const getServerSideProps = wrapper.getServerSideProps(
 (store) =>
   async ({ req }) => {
     await store.dispatch(apartmentUsed(req));
   }
);

export default Usados;
