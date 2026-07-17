import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useBlogStore } from "@/store/blog.store";

const BlogDialog = ({
  btnText,
  title,
  description,
  onClickEvent,
  submitText,
}: {
  btnText: string;
  title: string;
  description: string;
  onClickEvent: () => void;
  submitText: string;
}) => {
  const isOpen = useBlogStore((state) => state.isOpen);
  const dailogClose = useBlogStore((state) => state.setDailogClose);
  const dailogOpen = useBlogStore((state) => state.setDailogOpen);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger
        onClick={() => {
          dailogOpen();
        }}
        className="border border-red-200 text-red-600 hover:bg-red-500 hover:text-white hover:border-red-500 text-xs font-bold px-3 py-2 transition-colors cursor-pointer"
      >
        {btnText}
      </DialogTrigger>
      <DialogContent className="rounded-none border-border-light">
        <DialogHeader>
          <DialogTitle className="font-black text-ink">{title}</DialogTitle>
          <DialogDescription className="text-body-muted">{description}</DialogDescription>
          <DialogFooter>
            <DialogClose
              onClick={dailogClose}
              className="border border-border-light hover:border-ink px-4 py-2 text-sm font-semibold transition-colors"
            >
              Cancel
            </DialogClose>
            <button
              type="submit"
              onClick={onClickEvent}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm font-semibold transition-colors cursor-pointer"
            >
              {submitText}
            </button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDialog;
