import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../../components";
import { apartmentUsed } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";


const Usados = () => {
 const { loading, data } = useSelector(
   (state) => state.apartmentUsed
 );

 return (
   <Layout>
     <Apartments title='Apartamentos en renta usados' data={data} loading={loading} />
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
