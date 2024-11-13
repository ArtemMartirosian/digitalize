"use client";

import { X } from "lucide-react";
import { ServiceFeatureProps } from "../types/definitions";
import { Dispatch, SetStateAction } from "react";

interface Props {
  item: ServiceFeatureProps;
  setFeatures: Dispatch<SetStateAction<ServiceFeatureProps[]>>;
}

export const ServiceFeauterCard = ({ item, setFeatures }: Props) => {
  const onRemoveFeature = (id: string) => {
    setFeatures(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="relative flex w-fit items-center gap-2 whitespace-nowrap rounded-sm border bg-muted px-3 py-1 shadow-md">
      <span className="text-sm">{item.feature}</span>
      <button
        type="button"
        className="text-red-500 hover:text-red-600"
        onClick={() => onRemoveFeature(item.id)}
      >
        <X size={16} />
      </button>
    </div>
  );
};
