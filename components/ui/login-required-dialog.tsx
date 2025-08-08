import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, LogIn } from "lucide-react";
import React from "react";

interface LoginRequiredDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginRequiredDialog({ open, onOpenChange }: LoginRequiredDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-elementz-slate border-elementz-brown text-elementz-cream">
        <DialogHeader>
          <DialogTitle className="font-anton text-center" style={{ fontWeight: 400 }}>
            Iniciar Sesión Requerido
          </DialogTitle>
        </DialogHeader>
        <div className="text-center py-6">
          <ShoppingCart className="h-16 w-16 text-elementz-brown mx-auto mb-4" />
          <p className="text-elementz-gray mb-6">Debes iniciar sesión para agregar productos al carrito</p>
          <div className="space-y-3">
            <Link href="/login">
              <Button className="w-full bg-elementz-brown hover:bg-elementz-brown/80 text-elementz-cream">
                <LogIn className="h-4 w-4 mr-2" />
                Iniciar Sesión
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full border-elementz-brown text-elementz-brown hover:bg-elementz-brown hover:text-elementz-cream bg-transparent"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
