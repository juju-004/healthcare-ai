import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gray-100">
      <aside>
        <p className="text-gray-700">
          Copyright &copy; 2025 - All right reserved by{" "}
          <Link href={"/"} className="hover:underline">
            Pneumonia diagnosis
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
