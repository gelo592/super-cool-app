const LayoutWithHeader = ({ children, steps, ...props }) => (
  <Layout {...props}>
    <Header steps={steps} />
    <LayoutContent>
      <Container>
        {children}
      </Container>
    </LayoutContent>
  </Layout>
);

LayoutWithHeader.propsTypes = {
  ...BaseLayout.propTypes,
  steps: PropTypes.array.isRequired,
};

export default LayoutWithHeader;