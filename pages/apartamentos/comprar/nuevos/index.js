import { useSelector } from "react-redux";
import { Apartments, Layout } from "../../../../components";
import { apartmentNews } from "../../../../redux/actions";
import { wrapper } from "../../../../redux/store";


const Nuevos = () => {
 const { loading, data } = useSelector(
   (state) => state.apartmentNews
 );

 console.log(data);
 return (
   <Layout>
     <Apartments title='Apartamentos en venta nuevos' data={data} loading={loading} />
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
