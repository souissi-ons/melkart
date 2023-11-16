import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <div className="flex items-center justify-between mr-20">
        <img src="logo-melkart-1.png" alt="Lego Icon" className="h-20 w-20" />

        <ul className="flex space-x-20 m-6 text-white">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/equipe">Notre équipe</Link>
          </li>
          <li>
            <Link href="/devis">Demander un devis</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
