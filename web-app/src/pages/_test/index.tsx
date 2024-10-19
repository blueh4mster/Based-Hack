import tw from "twin.macro";

import { useReadMaticDecimalQuery } from "~/api/api-app/read";

const TestPage = () => {
  const { data: decimalData } = useReadMaticDecimalQuery();
  const decimal = decimalData?.data ?? 0;

  return (
    <Wrapper>
      <Title>FOR TEST PAGE</Title>
      <Content>{`connect api & fetch matic decimal data for text : ${decimal}`}</Content>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  text-white
`;
const Title = tw.div`
  font-sb-20
`;
const Content = tw.div`
  font-r-14
`;

export default TestPage;
