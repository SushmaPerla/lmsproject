import logoImage from "./logo.jpeg";
const Logo = () => {
  const width = 50;
  const height = 50;

  return (
    <img
      src={logoImage}
      alt="Your Company Logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
