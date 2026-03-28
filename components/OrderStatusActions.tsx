"use client";

import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface OrderStatusActionsProps {
  orderId: string;
  currentStatus: string;
}

export default function OrderStatusActions({ orderId, currentStatus }: OrderStatusActionsProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const router = useRouter();

  const updateStatus = async (newStatus: string) => {
    setIsLoading(newStatus);
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la mise à jour du statut");
    } finally {
      setIsLoading(null);
    }
  };

  if (currentStatus === "cancelled") return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => updateStatus("confirmed")}
        disabled={!!isLoading || currentStatus === "confirmed"}
        className={`p-1.5 rounded-lg transition-colors ${
          currentStatus === "confirmed"
            ? "bg-green-50 text-green-600 opacity-50 cursor-not-allowed"
            : "bg-green-50 text-green-600 hover:bg-green-100"
        }`}
        title="Confirmer la commande"
      >
        {isLoading === "confirmed" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
      </button>
      
      <button
        onClick={() => {
          if (confirm("Êtes-vous sûr de vouloir annuler cette commande ?")) {
            updateStatus("cancelled");
          }
        }}
        disabled={!!isLoading}
        className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
        title="Annuler la commande"
      >
        {isLoading === "cancelled" ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
      </button>
    </div>
  );
}
