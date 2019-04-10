const Layout = ({ children, steps, ...props }) => (
  <Box {...props}>
    <LayoutContent>
      <Container>
        {children}
      </Container>
    </LayoutContent>
  </Box>
);

Layout.propsTypes = {
  ...BaseLayout.propTypes,
  steps: PropTypes.array.isRequired,
};

export default Layout;