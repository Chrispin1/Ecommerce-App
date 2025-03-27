const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black py-12">
      <div className="mx-auto container">
        <p className="text-white text-center text-xs md:text-sm px-2">
          Copyright &copy; Ecommerce Shop {currentYear}. All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
