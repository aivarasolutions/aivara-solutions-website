"use client";

import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();
  
  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container max-w-md py-10">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You need to be logged in to view this page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/auth">Login or Register</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              Your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p>{user?.name}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{user?.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Member Since</p>
              <p>{new Date(user?.createdAt || "").toLocaleDateString()}</p>
            </div>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
            <CardDescription>
              Your recent purchases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-6 text-muted-foreground">
              No purchases yet
            </div>
            <Button asChild className="w-full">
              <Link href="/marketplace">
                Browse GPT Marketplace
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
