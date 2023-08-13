import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { Form } from "./components/Form";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { secrets } from "../../../creds";

const onSubmit = (data: any) => console.log(data);

export async function getStaticProps() {
  const client = new ApolloClient({
    headers: {
      "x-hasura-admin-secret": `${secrets.db.admin}`,
    },
    uri: "https://composed-stingray-81.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });
  const resp = await client.query({
    query: gql`
      query ExampleQuery {
        users {
          name
        }
      }
    `,
  });
  return {
    props: {
      response: resp,
    },
  };
}

const Signin = ({ response }) => {
  console.log(response);
  return (
    <Section>
      <Navbar>
        <Heading>sign in</Heading>
      </Navbar>
      <Form onSubmit={onSubmit} />
    </Section>
  );
};

export default Signin;
