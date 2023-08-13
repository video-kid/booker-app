import { Section } from "@/components/Section/Section";
import { Navbar } from "@/components/Navbar/Navbar";
import { Heading } from "@/components/Heading/Heading";
import { Form } from "./components/Form";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const onSubmit = (data: any) => console.log(data);

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://spacex-production.up.railway.app/",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        company {
          ceo
        }
        roadster {
          apoapsis_au
        }
      }
    `,
  });
  return {
    props: {
      company: data,
    },
  };
}

const Signin = ({ company }) => {
  console.log("launches", company);
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
