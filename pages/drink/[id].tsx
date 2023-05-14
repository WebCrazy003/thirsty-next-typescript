import React from "react";
import { useRouter } from "next/router";

import { Layout } from "@components";

const Detail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout pageTitle="Name" showNav={true}>
      <div>detail page - {id}</div>
    </Layout>
  );
};

export default Detail;
