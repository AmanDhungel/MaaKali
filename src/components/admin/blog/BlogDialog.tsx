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
import { Button } from "@/components/ui/button";
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
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
        {btnText}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogFooter>
            <DialogClose onClick={dailogClose}>
              <Button variant={"outline"}> Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              onClick={onClickEvent}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
              {submitText}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDialog;
