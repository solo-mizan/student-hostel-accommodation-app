import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image height={36} width={36} alt="logo" src="/logo.jpg" />
        <p className="font-bold text-inherit">HOMO</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4 hidden" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Acomoditions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/faq">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex hidden">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
