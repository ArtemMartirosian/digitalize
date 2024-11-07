import { LoaderCircle } from "lucide-react";

interface Props {
  size?: number;
}

export const Loading = ({ size = 18 }: Props) => {
  return <LoaderCircle size={size} className="animate-spin" />;
};
