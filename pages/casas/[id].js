import React from 'react'
import { useSelector } from 'react-redux';
import { Layout, PropertyDetail } from '../../components';
import { propertyDetail } from '../../redux/actions';
import { wrapper } from '../../redux/store';

const SearchId = () => {
  const { loading, data } = useSelector((state) => state.propertyDetail);

  console.log("SearchId", data)


  return (
    <Layout>
      <PropertyDetail data={data} loading={loading} />
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  await store.dispatch(propertyDetail(req, params.id))
})


export default SearchId
