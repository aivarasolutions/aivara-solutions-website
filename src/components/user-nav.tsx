"use client";

import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserNav() {
  const { isAuthenticated, user } = useAuth();
  
  if (isAuthenticated && user) {
    return (
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link href="/account">
            {user.name}
          </Link>
        </Button>
        <Button asChild variant="default" size="sm">
          <Link href="/account">
            My Account
          </Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="flex items-center gap-2">
      <Button asChild variant="ghost" size="sm">
        <Link href="/auth">
          Login
        </Link>
      </Button>
      <Button asChild variant="default" size="sm">
        <Link href="/auth?tab=register">
          Sign Up
        </Link>
      </Button>
    </div>
  );
}
