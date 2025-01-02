import { NAV_LINKS } from "../constants";

export default function Navbar() {
  return (
    <header className="py-4 sticky top-0 z-50">
      <div className="screen-max-width flex-between">
        <h1 className="logo">Charllson</h1>

        <div className="flex-center gap-10">
         {NAV_LINKS.map(link => 
           link.label === "Hire Me" ? (
            <a href={link.url} key={link.label} className="btn-backgroud py-2 px-4 rounded-full ">
                {link.label}
            </a>
           ) : (
            <a href={link.url} key={link.label}>
              {link.label}
            </a>
           )
         )}
        </div>
      </div>
    </header>
  );
}
