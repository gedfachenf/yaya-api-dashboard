"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { PopoverContentProps } from "@radix-ui/react-popover";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface DeleteActionProps extends PopoverContentProps {
  onDelete: () => Promise<void>;
  titleNode?: React.ReactNode;
}

export function DeleteAction({ onDelete, titleNode }: DeleteActionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"destructive"}>
          <Icon icon="ic:twotone-delete" width={30} height={30} />
          {titleNode || "Delete"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Are you sure you want to delete?
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            This action cannot be undone. This will permanently delete.
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <Button
            type="button"
            className="text-sm font-semibold leading-6"
            variant={"destructive"}
            disabled={isSubmitting}
            onClick={async () => {
              try {
                setIsSubmitting(true);
                await onDelete();
              } finally {
                setIsSubmitting(false);
                router.refresh();
              }
            }}
          >
            {isSubmitting && <Loader2 className="animate-spin" />}
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
