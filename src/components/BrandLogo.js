import Image from "next/image";
import logo from "../../public/mireva logo png -new.png";
import newLogo from "../../public/mireva logo png-new.png";
import latestLogo from "../../public/mireva logo png new.png";

export default function BrandLogo({ className = "", priority = false, variant = "current" }) {
  const isNewLogo = variant === "new";
  const source = variant === "latest" ? latestLogo : isNewLogo ? newLogo : logo;

  return (
    <span className={`brand-logo${isNewLogo ? " brand-logo--new" : ""} ${className}`}>
      <Image src={source} alt="" priority={priority} />
    </span>
  );
}
